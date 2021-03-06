const defaultResult = 0;
let currentResult = defaultResult;
let logEnteries = [];

//Gets input from input field
function getUserNumberInput(){
    return parseInt(usrInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
   const calcDescription =`${resultBeforeCalc} ${operator} ${calcNumber}`; 
   outputResult(currentResult,calcDescription); //from vendor file
}

function writeToLog(
    operationIdentifier,
     prevResult,
      operationNumber, 
      newResult){
        const logEntry = {
            operation: operationIdentifier,
            prevResult: prevResult,
            number: operationNumber,
            result:newResult
        };
        logEnteries.push(logEntry);
        //console.log(logEntry.operation);
        console.log(logEnteries);
      }

      function calculateResult(calculationType){
     const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    if(calculationType == 'ADD'){
        currentResult += enteredNumber;
        mathOperator ='+';
    } else{
        currentResult -=enteredNumber;
        mathOperator ='-';
    }
    
    createAndWriteOutput('+', initialResult, enteredNumber )
     writeToLog('ADD', initialResult, enteredNumber, currentResult);  
      }

function add() {
    calculateResult('ADD');
}

function subtract(){
    calculateResult('SUBTRACT');
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *=  enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber )
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /=  enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber )
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);