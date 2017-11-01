var startw3c = function() {

  var paymentInitParams  = {correlationId: "correlation_id_1234",
                      visitId: "visit_id_1234",
                      locale: "en_US",
                      collectShippingAddress: false,
                      CheckoutPaymentInfo: {
                        currencyCode :"USD",
                        total:"38.97",
                        buttonAction: 'nopay'
                      },
                      PaymentConstraints: {
                        acceptedBillingCountries: ["US", "CA", "AU"],
                        acceptedShippingCountries: [],
                        acceptedCardBrands: ["VISA"],
                        acceptCanadianVisaDebit: false
                      },
                      MerchantInfo: {
                        displayName: "Merchant Samsung",
                        logoUrl: "http://merchant.com/logo",
                        websiteUrl: "http://merchant.com",
                        customerSupportUrl: "http://merchant.com/customerservice",
                        bannerDisplayName: "Banner",
                        bannerURL: "http://merchant.com/banner",
                        currencyFormat: "USD",
                        countryCode: "US"
                      }
                    };
  var visaIntentData =  "ew0KCSJyZWZlcmVuY2VVUkwiOiAiaHR0cDovL3d3dy5nb29nbGUuY29tIiwNCgkibWVyY2hhbnRBcGlLZXkiOiAiMEdLU1dLQTBaOEJLTEc0UlVBSjUxM0NHeG15RVRNWTBhUU41ZE5Yc3dlWlJQOXFTQSIsDQoJIm9yZGVySWQiOiAiTWFub2oxMjM0NSIsDQoJImV2ZW50U291cmNlIjogIkxpZ2h0Ym94VFciLA0KCSJjaGFubmVsIjogIldlYiIsDQoJImN1cnJlbmN5Q29kZSI6ICJVU0QiLA0KCSJzdWJ0b3RhbCI6ICI4MCIsDQoJInNoaXBwaW5nSGFuZGxpbmciOiAiNSIsDQoJInRheCI6ICI1IiwNCgkiZGlzY291bnQiOiAiNSIsDQoJImdpZnRXcmFwIjogIjEwIiwNCgkibWlzYyI6ICI1IiwNCgkidG90YWwiOiAiMTAwIiwNCgkicmV2aWV3TWVzc2FnZSI6ICJJbiBjb21wdXRpbmcsIHBsYWluIHRleHQgaXMgdGhlIGRhdGEgKCkiLA0KCSJtZXJjaGFudENvbmZpZyI6IHsNCgkJImV4dGVybmFsUHJvZmlsZUlkIjogIlRlc3QxIg0KCX0NCn0=";

  var paymentRequestData = {
    checkoutPartner: "VisaCheckout",
    requestPayload: {
      data: {
        checkoutPaymentInfo: paymentInitParams,
        visaIntentData: visaIntentData,
        paymentInitParams: paymentInitParams
      }
    }
  };




  const creditCardPaymentMethod = {
    //supportedMethods: 'basic-card',
    // data: {
    //   supportedNetworks: ['visa', 'mastercard', 'amex'],
    //   supportedTypes: ['credit', 'debit'],
    // },
  };

  const supportedPaymentMethods = [
    //creditCardPaymentMethod, 
    {
      supportedMethods: ['https://ecomm.mpay.samsung.com/ew/v1/vco/w3c'],
      data: paymentRequestData
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