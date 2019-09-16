loanForm = document.querySelector('#loan-form')

const clearAlert = () => {
    document.querySelector('.alert').remove()
}

const showAlert = (error) => {
    const errorDiv = document.createElement('div')
    errorDiv.className = 'alert alert-danger'
    errorDiv.appendChild(document.createTextNode(error))
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')
    card.insertBefore(errorDiv, heading)
    setTimeout(clearAlert, 2000)
}

const calculateResults = () => {
    const amount = document.querySelector('#amount')
    const interest = document.querySelector('#interest')
    const years = document.querySelector('#years')
    const monthlyPayment = document.querySelector('#monthly-payment')
    const totalPayment = document.querySelector('#total-payment')
    const totalInterest = document.querySelector('#total-interest')

    const principal = parseFloat(amount.value)
    const calculatedInterest = parseFloat(interest.value) / 100 / 12
    const calculatedPayments = parseFloat(years.value) * 12

    const x = Math.pow(1 + calculatedInterest, calculatedPayments)
    const monthly = (principal * x * calculatedInterest) / (x - 1)

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly * calculatedPayments).toFixed(2)
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2)
        document.querySelector('#results').style.display = 'block'
        document.querySelector('#loading').style.display = 'none'
    } else {
        document.querySelector('#results').style.display = 'none'
        document.querySelector('#loading').style.display = 'none'
        showAlert('Please check your numbers')
    }
}

loanForm.addEventListener('submit', e => {
    document.querySelector('#results').style.display = 'none'
    document.querySelector('#loading').style.display = 'block'
    setTimeout(calculateResults, 5000)
    e.preventDefault()
})