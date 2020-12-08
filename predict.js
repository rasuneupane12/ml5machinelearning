/**
 * This file predicts the value of net change (close - open) of a stock with the given inputs and recommends buy or sell.
 *
 * @author Rasu Neupane.
**/

let nn;

let amznmodelDetails;
let applmodelDetails;
let fbmodelDetails;
let googlmodelDetails;
let nflxmodelDetails;

const options = {
    
    task: 'regression' ,
    debug: true
  }
 nn = ml5.neuralNetwork(options);

/**
 * Model details location for amazon.
**/
 amznmodelDetails = {
    model: 'model/amzn/model.json',
    metadata: 'model/amzn/model_meta.json',
    weights: 'model/amzn/model.weights.bin'
  }

/**
 * Model details location for appl.
**/
  applmodelDetails = {
    model: 'model/appl/model.json',
    metadata: 'model/appl/model_meta.json',
    weights: 'model/appl/model.weights.bin'
  }

/**
 * Model details location for fb.
**/  

  fbmodelDetails = {
    model: 'model/fb/model.json',
    metadata: 'model/fb/model_meta.json',
    weights: 'model/fb/model.weights.bin'
  }

/**
 * Model details location for googl.
**/
  googlmodelDetails = {
    model: 'model/googl/model.json',
    metadata: 'model/googl/model_meta.json',
    weights: 'model/googl/model.weights.bin'
  }

/**
 * Model details location for nflx.
**/

  nflxmodelDetails = {
    model: 'model/nflx/model.json',
    metadata: 'model/nflx/model_meta.json',
    weights: 'model/nflx/model.weights.bin'
  }


/**
 * This function checks which model is requested to load to predict the outcome.
**/
function modelLoaded(){
  console.log("model loaded");
  stock = document.getElementById("input_text_stock").value;
  if (stock === "APPL") {
  		nn.load(applmodelDetails, applmodelLoaded);
     }
  else if (stock === "AMZN") {
  		nn.load(amznmodelDetails, amznmodelLoaded);
     }
  else if (stock === "FB") {
  		nn.load(fbmodelDetails, fbmodelLoaded);
     }
  else if (stock === "GOOGL") {
  		nn.load(googlmodelDetails, googlmodelLoaded);
     }
  else if (stock === "NFLX") {
  		nn.load(nflxmodelDetails, nflxmodelLoaded);
     }
  else if (stock === "") {
          document.getElementById('msg').value = "Message"; 
    }
  else {
    document.getElementById('msg').value = "Enter the right stock ticker";
    
  } 

/**
 * This function loads amazon model and uses amazon model to predict the "net" output with the given manual input of financial data.
**/

  function amznmodelLoaded() {
	  const Open = 3203.53;
	  const High = 3228.64;
	  const Low = 3181.31;
	  const Sentiment = 0.057142858;
	  console.log("AMZN");
	  document.getElementById('msg').value = "no error"; 
	  const inputs = [Open, High, Low, Sentiment];
	  nn.predict(inputs, gotResults);
  }

/**
 * This function loads appl model and uses appl model to predict the "net" output with the given manual input of financial data.
**/
  function applmodelLoaded() {
  	
	  const Open = 123.52;
	  const High = 123.78;
	  const Low = 122.21;
	  const Sentiment = 0.050000002;
	  console.log("APPL");
	  document.getElementById('msg').value = "no error"; 
	  const inputs = [Open, High, Low, Sentiment];
	  nn.predict(inputs, gotResults);

  }

/**
 * This function loads fb model and uses fb model to predict the "net" output with the given manual input of financial data.
**/
  function fbmodelLoaded() {

	  const Open = 286.25;
	  const High = 286.65;
	  const Low = 281.07;
	  const Sentiment = -2;
	  console.log("FB");
	  document.getElementById('msg').value = "no err"; 
	  const inputs = [Open, High, Low, Sentiment];
	  nn.predict(inputs, gotResults);
  	
  }

/**
 * This function loads googl model and uses googl model to predict the "net" output with the given manual input of financial data.
**/
  function googlmodelLoaded() {

	  const Open = 1820.54;
	  const High = 1843.83;
	  const Low = 1817;
	  const Sentiment = 0.04;
	  console.log("GOOGL");
	  document.getElementById('msg').value = "no error"; 
	  const inputs = [Open, High, Low, Sentiment];
	  nn.predict(inputs, gotResults);
  	
  }

/**
 * This function loads nflx model and uses nflx model to predict the "net" output with the given manual input of financial data.
**/
  function nflxmodelLoaded() {

	  const Open = 502.99;
	  const High = 508.77;
	  const Low = 496.04;
	  const Sentiment = 0.05;
	  console.log("NFLX");
	  document.getElementById('msg').value = "no error"; 
	  const inputs = [Open, High, Low, Sentiment];
	  nn.predict(inputs, gotResults);
	  	
  }
    
  }

/**
 * This function evaluates the results and gives a buy/sell reccomendation based on the output.
**/
  
  function gotResults(error, results) {
   if (error) {
    console.error(error);
    document.getElementById('msg').value = error;
  } else {
     console.log(results);
     let r = results[0];
     let res = r.value;
    console.log(res);
    if(res < 0 ) {
      document.getElementById('buy_sell').value = "sell";
      console.log("sell");
     }
      if(res > 0 ) {
      document.getElementById('buy_sell').value = "buy";
     }
     }
     
     
}
