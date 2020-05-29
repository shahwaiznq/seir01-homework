$(document).ready(function () {
    var checking = 0;
    var savings = 0;
    $('body').css('background-color', 'green');

    $("#checking-deposit").on('click', function () {
        var checkingAmount = parseFloat($('#checking-amount').val());
        checking += checkingAmount; // TODO add additional validation checks
        $('#checking-balance').text(`$${checking}`);
        if (checking !== 0) {
            $('#checking-balance').removeClass('zero');
        }
    })

    $("#checking-withdraw").on('click', function () {
        var checkingAmount = parseFloat($('#checking-amount').val());
        if (checkingAmount > checking + savings) { // overdraft protection
            alert("I'm sorry Dave; I'm afraid I can't do that. ");
        } else if (checkingAmount > checking) { 
            // subtract as much as can from checking,
            checkingAmount -= checking;
            checking = 0; 
            savings -= checkingAmount;
            // then subtract the rest from savings
        } 
        else {
            checking -= checkingAmount;
        }
        $('#checking-balance').text(`$${checking}`);
        $('#savings-balance').text(`$${savings}`);
        if (checking === 0) {
            $('#checking-balance').addClass('zero');
        }
        if (savings === 0) {
            $('#savings-balance').addClass('zero');
        }
    })
    $("#savings-deposit").on('click', function () {
        var savingsAmount = parseFloat($('#savings-amount').val());
        savings += savingsAmount; // TODO add additional validation checks
        $('#savings-balance').text(`$${savings}`);
        if (savings !== 0) {
            $('#savings-balance').removeClass('zero');
        }

    })

    $("#savings-withdraw").on('click', function () {
        var savingsAmount = parseFloat($('#savings-amount').val());
        if (savingsAmount > checking + savings) { // overdraft protection
            alert("I'm sorry Dave; I'm afraid I can't do that. ");
        } else if (savingsAmount > savings) { 
            // subtract as much as can from checking,
            savingsAmount -= savings;
            savings = 0; 
            checking -= savingsAmount;
            // then subtract the rest from savings
        } 
        else {
            savings -= savingsAmount;
        }
        $('#checking-balance').text(`$${checking}`);
        $('#savings-balance').text(`$${savings}`);

        if (savings === 0) {
            $('#savings-balance').addClass('zero');
        }
        if (checking === 0) {
            $('#checking-balance').addClass('zero');
        }
    })


})