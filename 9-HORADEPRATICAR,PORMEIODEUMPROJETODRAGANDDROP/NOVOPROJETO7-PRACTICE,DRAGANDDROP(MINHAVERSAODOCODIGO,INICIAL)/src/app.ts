
const inputTemplate = document.getElementById('project-input') as HTMLTemplateElement
const inputTemplateForm = inputTemplate.content.cloneNode(true) as HTMLFormElement;
const projectTemplate = document.getElementById('single-project') as HTMLTemplateElement;
const listTemplate = document.getElementById('project-list') as HTMLTemplateElement;







document.body.appendChild(inputTemplateForm);




const realInputForm = document.querySelector('form') as HTMLFormElement;
const titleInput = document.getElementById('title') as HTMLInputElement;
const descInput = document.getElementById('description') as HTMLInputElement;
const peopleInput = document.getElementById('people') as HTMLTextAreaElement;

const submitButton = document.querySelector('button') as HTMLButtonElement;



// console.log(titleInput, descInput, peopleInput);
// console.log(titleInput.value, descInput.value, peopleInput.value);



// console.log(realInputForm);


var stringToHTML = function (str: string) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(str, 'text/html');
    console.log(doc);
	return doc.body;
};




interface Project {

   title: string;
   description: string;
   people: number;
   displayProjects(): void;
}



const products: Project[] = [];






class Project implements Project {

    title: string;
    description: string;
    people: number;

    constructor(title: string,  description: string, people: number) {

        this.title = title;
        this.description = description;
        this.people = people;
    }



}




realInputForm.addEventListener('submit', 


(event) => {
        event.preventDefault();
    const newPerson = new Project(titleInput.value, descInput.value, +peopleInput.value);


    products.push(newPerson);

    const manipulatedProducts = products.map(
        (product) => {
                return `
                <li>
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p>${product.people}</p>
                </li>
                `
        }
    ).join().split(',').join(''); ///tudo para ficarmos com uma fita de HTML regular...


        console.log(manipulatedProducts);

    const alteredString = stringToHTML(manipulatedProducts);

    console.log(alteredString);




    if (products.length > 1) {


        // const list = document.getElementsByClassName('projects');
        let list = document.querySelector('.projects')?.lastElementChild as HTMLElement;

        console.log(list, 'LINE');

 

        return list.innerHTML = manipulatedProducts;
        // const parent

    }





    const parent = document.createElement('div');
    
    
    parent.append(listTemplate.content.cloneNode(true));


    console.log(parent);
    // parent.innerHTML = `
    

    // `

    parent.innerHTML = `
        <section class="projects" id="insert">
            <header>
                <h2></h2>
            </header>
            <ul>
                ${manipulatedProducts}
        </section>
    `



    return document.body.append(parent);

    
//   const insertedNode = document.createElement(manipulatedProducts);
    


}
)








