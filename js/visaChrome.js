var startw3c = function() {

  var paymentInitParams = {
    correlationId: "correlation_id_1234",
    visitId: "visit_id_1234",
    locale: "en_US",
    collectShippingAddress: false,
    CheckoutPaymentInfo: {
      currencyCode: "USD",
      total: "38.97",
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
  var visaIntentData = "ew0KCSJyZWZlcmVuY2VVUkwiOiAiaHR0cDovL3d3dy5nb29nbGUuY29tIiwNCgkibWVyY2hhbnRBcGlLZXkiOiAiMEdLU1dLQTBaOEJLTEc0UlVBSjUxM0NHeG15RVRNWTBhUU41ZE5Yc3dlWlJQOXFTQSIsDQoJIm9yZGVySWQiOiAiTWFub2oxMjM0NSIsDQoJImV2ZW50U291cmNlIjogIkxpZ2h0Ym94VFciLA0KCSJjaGFubmVsIjogIldlYiIsDQoJImN1cnJlbmN5Q29kZSI6ICJVU0QiLA0KCSJzdWJ0b3RhbCI6ICI4MCIsDQoJInNoaXBwaW5nSGFuZGxpbmciOiAiNSIsDQoJInRheCI6ICI1IiwNCgkiZGlzY291bnQiOiAiNSIsDQoJImdpZnRXcmFwIjogIjEwIiwNCgkibWlzYyI6ICI1IiwNCgkidG90YWwiOiAiMTAwIiwNCgkicmV2aWV3TWVzc2FnZSI6ICJJbiBjb21wdXRpbmcsIHBsYWluIHRleHQgaXMgdGhlIGRhdGEgKCkiLA0KCSJtZXJjaGFudENvbmZpZyI6IHsNCgkJImV4dGVybmFsUHJvZmlsZUlkIjogIlRlc3QxIg0KCX0NCn0=";

  var paymentRequestData = {
    merchantName: 'Samsung Pay Demo',
    merchantId: '00000000000000000000',
    environment: 'TEST',
    allowedCardNetworks: ['AMEX', 'DISCOVER', 'MASTERCARD', 'VISA'],
    paymentMethodTokenizationParameters: {
      tokenizationType: 'GATEWAY_TOKEN',
      parameters: {
        'gateway': 'stripe',
        'stripe:publishableKey': 'xx_demo_xxxxxxxxxxxxxxxxxxxxxxxx',
        'stripe:version': '2016-07-06',
      },
    },
    checkoutPartner: "VisaCheckout",
    requestPayload: {
      data: {
        checkoutPaymentInfo: paymentInitParams,
        visaIntentData: visaIntentData,
        paymentInitParams: paymentInitParams
      }
    }
  };

  var test1 = '[{"supportedMethods":["https:\/\/spay.samsung.com"],"data":{"productId":"697debcbb9f34940b791b0","billingAddressRequired":true,"merchantName":"payment-request-samsungpay","allowedCardNetworks":["VISA","MASTERCARD","AMEX","DISCOVER","JCB","DINERS_CLUB"]}},{"supportedMethods":["basic-card"],"data":{"supportedNetworks":["visa","mastercard","amex","discover","jcb","diners_club"]}}]';

  var test2 = JSON.parse(test1);
  console.log(test2);
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
      supportedMethods: ['https://spay.samsung.com'],
      data: {
        productId: "697debcbb9f34940b791b0",
        billingAddressRequired: false,
        merchantName: "payment-request-samsungpay",
        allowedCardNetworks: ["VISA", "MASTERCARD", "AMEX", "DISCOVER", "JCB", "DINERS_CLUB"],
        checkoutPartner: "VisaCheckout",
        requestPayload: {
          data: {
            checkoutPaymentInfo: paymentInitParams,
            visaIntentData: visaIntentData,
            paymentInitParams: paymentInitParams
          }
        }
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
    //test2,
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