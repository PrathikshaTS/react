function customRender(reactElement,root){

    // const domElement=document.createElement(reactElement.type);
    // domElement.innerHTML=reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target);
    // root.appendChild(domElement);


    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    root.appendChild(domElement);

}
const reactElement={
    type:'a',
    props:{
        href:"https://www.google.co.in/",
        target:'_blank'
    },
    children:"click me"
}

const root=document.querySelector("#root");
customRender(reactElement,root);