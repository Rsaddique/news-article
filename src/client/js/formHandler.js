async function handleSubmit(event) {
    console.log('handle submit')
    event.preventDefault();
    console.log(event);
    // check what text was put into the form field
    let formText = document.getElementById('name').value
   if(Client.checkUrl(formText)){
    let response =await fetch('http://localhost:3000/usertext', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ formText }) 
    });
    try{
        let jsonnRes = await response.json();
        console.log(jsonnRes);
        const results = document.getElementById('results');
        const irony = document.createElement('p');
        const agreement = document.createElement('p');
        const model = document.createElement('p');
        const confidence = document.createElement('p');
        const subjectivity = document.createElement('p');
        
        irony.innerText = `Irony:  ${jsonnRes.irony}`;
        results.append(irony);
        agreement.innerText = `Agreement: ${jsonnRes.agreement}`;
        results.append(agreement);
        model.innerText = `Model: ${jsonnRes.model}`;
        results.append(model);
        confidence.innerText = `Confidence: ${jsonnRes.confidence}`;
        results.append(confidence);
        subjectivity.innerText = `Subjectivity: ${jsonnRes.subjectivity}`;
        results.append(subjectivity);
        return jsonnRes;
    }catch(error){
        console.log(error);
    }
}else{
    alert('Please Enter Valid Url')
}
}


export default handleSubmit 


    

