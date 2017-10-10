var paymentInitParams  = {correlationId: "correlation_id_1234",
							        visitId: "visit_id_1234",
							        locale: "en_US",
							        collectShippingAddress: true,
							        PaymentConstraints: {
							          acceptedBillingCountries: ["US", "CA", "AU"],
							          acceptedShippingCountries: [],
							          acceptedCardBrands: ["VISA"],
							          acceptCanadianVisaDebit: false
							        },
							        MerchantInfo: {
							          displayName: "Merchant Name",
							          logoUrl: "http://merchant.com/logo",
							          websiteUrl: "http://merchant.com",
							          customerSupportUrl: "http://merchant.com/customerservice",
							          bannerDisplayName: "Banner",
							          bannerURL: "http://merchant.com/banner",
							          currencyFormat: "USD",
							          countryCode: "US"
							        },
							        CheckoutPaymentInfo: {
        								currencyCode: "USD",
        								total: "20.00",
        								buttonAction: "Pay",
        								reviewMessage: "Review message"
      								}
							      };

 var aAdapter = window.vAdapters.com.google.androidPay.VisaPaymentAdapter;
 var aAdapterObj = new aAdapter(paymentInitParams);

 var aPayArea = document.getElementById("aPay");
 var sPayArea = document.getElementById("sPay");

 function apayCheck() {
 	aPayArea.innerHTML = '';
 	aAdapterObj.getWalletInfo()
 	.then(function(result) {
 		aPayArea.innerHTML = "aPay works " + JSON.stringify(result);
 		console.log("result received from AndroidPay Adapter works!")
 		console.log(result);
	})
 	.catch(function(error) {
 		aPayArea.innerHTML = "aPay error " + JSON.stringify(error);
 		console.log("result received from AndroidPay Adapter does not work!");
 		console.log(error);
 	});
 }
apayCheck();


var sAdapter = window.vAdapters.samsungPay.VisaPaymentAdapter;
var sAdapterObj = new sAdapter(paymentInitParams);

function sPayCheck(){
	sPayArea.innerHTML = '';
	sAdapterObj.getWalletInfo().then(function(result){
		sPayArea.innerHTML = "sPay works " + JSON.stringify(result);
		console.log('result received from SamsungPay Adapter works');
		console.log(result);
	}).catch(function(error){
		sPayArea.innerHTML = "sPay error " + JSON.stringify(error);
		console.log('error received from SamsungPay Adapter does not work!');
		console.log(error);
	});
}
sPayCheck();
