const element = document.getElementById('box');

let box = '';

let text = 'Hello World';


for(let i = 0; i<100; i++)
    {
    
    let x = '';
        
    if(i%2)
    {
        x="text-info";
    }
    else
    {
        x="text-danger";
    }

    box += `
    <div class="col-md-3">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title ${x}">${text}</h4>
                <p class="card-text">Text</p>
            </div>
        </div>
    </div>
    `;
}

element.innerHTML = box;