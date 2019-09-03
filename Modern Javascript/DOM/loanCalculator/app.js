const loanForm = document.querySelector('#loan-form')

const calculateResults = () => {
    const amount = document.querySelector('#amount'),
        interest = document.querySelector('#interest'),
        years = document.querySelector('#years'),
        monthlyPayment = document.querySelector('#monthly-payment'),
        totalPayment = document.querySelector('#total-payment'),
        totalInterest = document.querySelector('#total-interest'),
        principal = parseFloat(amount.value),
        calculatedInterest = parseFloat(interest.value) / 100 / 12,
        calculatedPayments = parseFloat(years.value) * 12,
        x = Math.pow(1 + calculatedInterest, calculatedPayments),
        monthly = (principal * x * calculatedInterest) / (x - 1)

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly * calculatedPayments).toFixed(2)
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2)
        document.querySelector('#results').style.display = 'block'
        document.querySelector('#loading').style.display = 'none'
    } else {
        document.querySelector('#results').style.display = 'none'
        document.querySelector('#loading').style.display = 'none'
        showError('Please check your numbers')
    }
}

const showError = error => {
    const errorDiv = document.createElement('div')
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')
    errorDiv.className = 'alert alert-danger'
    errorDiv.appendChild(document.createTextNode(error))
    card.insertBefore(errorDiv, heading)
    setTimeout(clearError, 2000)
}

const clearError = () => {
    document.querySelector('.alert').remove()
}

loanForm.addEventListener('submit', e => {
    document.querySelector('#results').style.display = 'none'
    document.querySelector('#loading').style.display = 'block'
    setTimeout(calculateResults, 5000)
    e.preventDefault()
})