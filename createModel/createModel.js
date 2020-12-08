/**
 * This file creates a model for each FAANG company using the csv data files for each company.
 * @author Rasu Neupane.
 */

let nnetamzn;
let nnetappl; 
let nnetfb; 
let nnetgoogl; 
let nnetnflx;  

const optionsamzn = {
  dataUrl: "fdata/amzn.csv", //links to the amzn.csv file.
  task: 'regression', // task is regression with single output
  inputs: ['Open','High','Low','Sentiment'], // inputs of the data  
  outputs: ['Net'], // ouput of the data 
  debug: 'true', // debug set true to have better training visualizations
}

const optionsappl = {
  dataUrl: "fdata/appl.csv", //links to the appl.csv file.
  task: 'regression', // task is regression with single output
  inputs: ['Open','High','Low','Sentiment'], // inputs of the data  
  outputs: ['Net'], // ouput of the data 
  debug: 'true', // debug set true to have better training visualizations
}

const optionsfb = {
  dataUrl: "fdata/fb.csv", //links to the fb.csv file
  task: 'regression', // task is regression with single output
  inputs: ['Open','High','Low','Sentiment'], // inputs of the data  
  outputs: ['Net'], // ouput of the data 
  debug: 'true', // debug set true to have better training visualizations
}

const optionsgoogl = {
  dataUrl: "fdata/googl.csv", //links to the googl.csv file
  task: 'regression', // task is regression with single output
  inputs: ['Open','High','Low','Sentiment'], // inputs of the data  
  outputs: ['Net'], // ouput of the data 
  debug: 'true', // debug set true to have better training visualizations
}

const optionsnflx = {
  dataUrl: "fdata/nflx.csv", //links to the nflx.csv file 
  task: 'regression', // task is regression with single output
  inputs: ['Open','High','Low','Sentiment'], // inputs of the data  
  outputs: ['Net'], // ouput of the data 
  debug: 'true', // debug set true to have better training visualizations
}




/**
 * initializing neuralNetwork for amazon
 */
nnetamzn = ml5.neuralNetwork(optionsamzn, dataLoadedamzn);

/**
 * initializing neuralNetwork for amazon
 */
nnetappl = ml5.neuralNetwork(optionsappl, dataLoadedappl); 

/**
 * initializing neuralNetwork for amazon
 */
nnetfb = ml5.neuralNetwork(optionsfb, dataLoadedfb); 

/**
 * initializing neuralNetwork for amazon
 */
nnetgoogl = ml5.neuralNetwork(optionsgoogl, dataLoadedgoogl); 

/**
 * initializing neuralNetwork for amazon
 */
nnetnflx = ml5.neuralNetwork(optionsnflx, dataLoadednflx);  


/**
 * This function normailzes and then trains the model by calling trainModelamzn function.
 * 
 */
function dataLoadedamzn() {
  nnetamzn.normalizeData(); //normalize
  trainModelamzn();
}

/**
 * This function normailzes and then trains the model by calling trainModelappl function.
 * 
 */
function dataLoadedappl() {
  nnetappl.normalizeData(); //normalize
  trainModelappl();
}

/**
 * This function normailzes and then trains the model by calling trainModelafb function.
 * 
 */
function dataLoadedfb() {
  nnetfb.normalizeData(); //normalize
  trainModelfb();
}

/**
 * This function normailzes and then trains the model by calling trainModelgoogl function.
 * 
 */
function dataLoadedgoogl() {
  nnetgoogl.normalizeData(); //normalize
  trainModelgoogl();
}

/**
 * This function normailzes and then trains the model by calling trainModelnflx function.
 * 
 */
function dataLoadednflx() {
  nnetnflx.normalizeData(); //normalize
  trainModelnflx();
}


/**
 * This function trains the model for amzn.
 */
function trainModelamzn() {
  const trainingOptionsamzn = {
    epochs: 50, // 50 times
    batchSize: 10
  }
  nnetamzn.train(trainingOptionsamzn, whileTrainingamzn, finishedTrainingamzn);
}

/**
 * This function trains the model for appl.
 */
function trainModelappl() {
  const trainingOptionsappl = {
    epochs: 50, // 50 times
    batchSize: 10
  }
  nnetappl.train(trainingOptionsappl, whileTrainingappl, finishedTrainingappl);
}

/**
 * This function trains the model for fb.
 */
function trainModelfb() {
  const trainingOptionsfb = {
    epochs: 50, // 50 times
    batchSize: 10
  }
  nnetfb.train(trainingOptionsfb, whileTrainingfb, finishedTrainingfb);
}

/**
 * This function trains the model for googl.
 */
function trainModelgoogl() {
  const trainingOptionsgoogl = {
    epochs: 50, // 50 times
    batchSize: 10
  }
  nnetgoogl.train(trainingOptionsgoogl, whileTraininggoogl, finishedTraininggoogl);
}

/**
 * This function trains the model for nflx.
 */
function trainModelnflx() {
  const trainingOptionsnflx = {
    epochs: 50, // 50 times
    batchSize: 10
  }
  nnetnflx.train(trainingOptionsnflx, whileTrainingnflx, finishedTrainingnflx);
}


/**
 * This function gives live epoch analysis while training Model for amzn. 
 */
function whileTrainingamzn(epoch, loss) {
  console.log(epoch);
}

/**
 * This function gives live epoch analysis while training Model for appl. 
 */
function whileTrainingappl(epoch, loss) {
  console.log(epoch);
}

/**
 * This function gives live epoch analysis while training Model for fb. 
 */
function whileTrainingfb(epoch, loss) {
  console.log(epoch);
}

/**
 * This function gives live epoch analysis while training Model for googl. 
 */
function whileTraininggoogl(epoch, loss) {
  console.log(epoch);
}

/**
 * This function gives live epoch analysis while training Model for nflx. 
 */
function whileTrainingnflx(epoch, loss) {
  console.log(epoch);
}


/**
 * This function saves the amzn model to the downloads folder after the training is finished.
 */
function finishedTrainingamzn() {
  nnetamzn.save("amznmodel", printamzn); // saves the model to the downloads folder as amznmodel.json, amznmodel.weights.bin, and amznmodel_beta.json.
}

/**
 * This function saves the appl model to the downloads folder after the training is finished.
 */
function finishedTrainingappl() {
  nnetappl.save("applmodel", printappl); // saves the model to the downloads folder as applmodel.json, applmodel.weights.bin, and applmodel_beta.json.
}

/**
 * This function saves the fb model to the downloads folder after the training is finished.
 */
function finishedTrainingfb() {
  nnetfb.save("fbmodel", printfb); // saves the model to the downloads folder as fbmodel.json, fbmodel.weights.bin, and fbmodel_beta.json.
}

/**
 * This function saves the googl model to the downloads folder after the training is finished.
 */
function finishedTraininggoogl() {
  nnetgoogl.save("googlmodel", printgoogl); // saves the model to the downloads folder as googlmodel.json, googlmodel.weights.bin, and googlmodel_beta.json.
}

/**
 * This function saves the nflx model to the downloads folder after the training is finished.
 */
function finishedTrainingnflx() {
  nnetnflx.save("nflxmodel", printnflx); // saves the model to the downloads folder as nflxmodel.json, nflxmodel.weights.bin, and nflxmodel_beta.json.
}

/**
 * This function prints the message after amzn model is created.
 */
 function printamzn() {
 	console.log("Model for AMZN created");
 }

 /**
 * This function prints the message after appl model is created.
 */
 function printappl() {
 	console.log("Model for APPL created");
 }

 /**
 * This function prints the message after fb model is created.
 */
 function printfb() {
 	console.log("Model for FB created");
 }

 /**
 * This function prints the message after googl model is created.
 */
 function printgoogl() {
 	console.log("Model for GOOGL created");
 }

 /**
 * This function prints the message after nflx model is created.
 */
 function printnflx() {
 	console.log("Model for NFLX created");
 }






