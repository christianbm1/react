import React from 'react';

//import { YourComponent } from './YourComponent';

//👇 This default export determines where your story goes in the story list

function Button(){
    return (
        <button>hello world</button>
    )
}

export default {
  title: 'YourComponent',
  component: <Button/>,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};