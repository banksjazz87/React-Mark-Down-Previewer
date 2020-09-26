import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.markdown';
import marked from 'marked';

class InputArea extends React.Component{
    constructor(props){
        super();
        this.state = {

        }
    }
    render(){
        return (
            <div>
                <h1 id="top">React Mark Down Previewer</h1>
                <p id="paragraph">Using GitHub flavored Markdown, type in the text area below to alter the webpage.</p>
                <textarea id="editor" onChange={this.props.globalOnChange} value={this.props.value}></textarea>
            </div>
        )
    }
}

class Body extends React.Component {
    constructor(props){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <div id="preview" onChange={this.props.globalOnChange} 
                     dangerouslySetInnerHTML={{__html: marked(this.props.value, {sanitze: true})}}>
                </div>
            </div>
        )
    }
}

class MarkDownApp extends React.Component {
    constructor(props) {
        super();
        this.state = {
            text: "<div style='text-align: center'><img src='https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png' alt='react image' height='50% 'width='50%'/></div> \n \n # Why should you learn how to use React? \n 1. The community. \n 2. React is scalable. \n 3. It's highly preferred by developers. \n 4. React is just plain cool. \n ## Pre-requisites for learning React \n At this website www.reactjs.org you can learn all about react. Before learning about react you should know about html elements like these `<h1> <div> <p>` \n as well as code blocks that look like this: \n \n ``` javascript \n \n function greeting(){ \n console.log('Hello World'); \n} \n``` \n ### Side Note \n Learning how to use React is going to take some time, and just as an infant learns how to walk, or a toddler learns how to ride a bike, you are going to make mistakes from time to time and it's very important to remember that it's all a part of the learning process.  As famous *poet* **Oscar Wilde** once said: \n >'Experience is the name \n \n > **everyone** gives to their mistakes' \n ## Good luck to you on your React journey! \n"
        }    
            this.globalOnChange = this.globalOnChange.bind(this); 
    }

    globalOnChange(event) {
        this.setState({
            text: event.target.value
        });  
    }
    render(){      
        return(
            <div id="entire">
                <InputArea globalOnChange={this.globalOnChange} 
                           value={this.state.text}/>
                <Body globalOnChange={this.globalOnChange} 
                      value={this.state.text}/>
            </div>       
             )
    }
}

ReactDOM.render(
    <MarkDownApp />,
    document.getElementById("root"));

