var startw3c = function() {

  const creditCardPaymentMethod = {
    supportedMethods: 'basic-card',
    // data: {
    //   supportedNetworks: ['visa', 'mastercard', 'amex'],
    //   supportedTypes: ['credit', 'debit'],
    // },
  };

  const supportedPaymentMethods = [
    creditCardPaymentMethod, {
      supportedMethods: ['https://ecomm.mpay.samsung.com/ew/v1/vco/w3c'],
      data: {
        merchantIdentifier: "XXXX",
        bobPaySpecificField: true
      }
    }
  ];



  var paymentDetails = {
    total: {
      label: "Total due",
      amount: {
        currency: "USD",
        value: 0
      }
    }
  };


  const options = {};

  var paymentRequest = new PaymentRequest(
    supportedPaymentMethods,
    //creditCardPaymentMethod,
    paymentDetails,
    options
  );

  paymentRequest.show()
    .then((paymentResponse) => {
      // The user filled in the required fields and completed the flow
      // Get the details from `paymentResponse` and complete the transaction.
      console.log("just to add breakpoint");
      return paymentResponse.complete();
    })
    .catch((err) => {
      // The API threw an error or the user closed the UI
      console.log(err);
    });
}

window.startw3c = startw3c;