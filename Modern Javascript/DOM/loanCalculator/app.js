const loanForm = document.querySelector('#loan-form')

// Calculare Results
const calculateResults = () => {
    // UI variables
    const amount = document.querySelector('#amount')
    const interest = document.querySelector('#interest')
    const years = document.querySelector('#years')
    const monthlyPayment = document.querySelector('#monthly-payment')
    const totalPayment = document.querySelector('#total-payment')
    const totalInterest = document.querySelector('#total-interest')

    const principal = parseFloat(amount.value)
    const calculatedInterest = parseFloat(interest.value) / 100 / 12
    const calculatedPayments = parseFloat(years.value) * 12

    // compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments)
    const monthly = (principal * x * calculatedInterest) / (x - 1)

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly * calculatedPayments).toFixed(2)
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2)

        // Show results
        document.querySelector('#results').style.display = 'block'
        // Hide loader
        document.querySelector('#loading').style.display = 'none'

    } else {
        // Hide results
        document.querySelector('#results').style.display = 'none'
        // Hide loader
        document.querySelector('#loading').style.display = 'none'
        showError('Please check your numbers')
    }

}

// Show error
const showError = error => {
    // Show results
    document.querySelector('#results').style.display = 'none'
    // Hide loader
    document.querySelector('#loading').style.display = 'none'

    const errorDiv = document.createElement('div')
    // Get elements
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')
    // Add class
    errorDiv.className = 'alert alert-danger'
    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error))
    // Insert Error above heading
    card.insertBefore(errorDiv, heading)

    // clear error after 2 seconds
    setTimeout(clearError, 2000)
}

const clearError = () => {
    document.querySelector('.alert').remove()
}

loanForm.addEventListener('submit', e => {
    // Hide results
    document.querySelector('#results').style.display = 'none'
    // Show loader
    document.querySelector('#loading').style.display = 'block'

    setTimeout(calculateResults, 2000)

    e.preventDefault()
})