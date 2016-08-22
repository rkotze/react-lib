import React, { Component } from 'react';
import { render } from 'react-dom';
import { 
  ButtonGroup, 
  ActionButton, 
  PhotoSlider,
  Photo,
  Lists,
  CodeSnippet,
  Toggler
} from 'ReactLib';
import { FirstNameInput } from './first-name-input';

export class WebApp extends Component {
  render() {
    return (
      <div>
        <h2>List</h2>
        <Lists>
          <h1>A</h1>
          <span>B</span>
          <span>C</span>
        </Lists>
	      <h2>Button Group</h2>
	      <ButtonGroup>
	      	<ActionButton actionId="1" onClick={() => console.log('howdy')}>
	      		Action 1
	      	</ActionButton>
	      	<ActionButton actionId="2">
	      		Action 2
	      	</ActionButton>
	      </ButtonGroup>

	      <h2>Photo Slider</h2>
	      <PhotoSlider>
          <Photo src="http://placehold.it/550X200/AA0000/fff?text=First best+test+image" alt="First test image" /> 
          <Photo src="http://placehold.it/550X200/00AA00/fff?text=Second best+test+image" alt="Second test image" />
          <Photo src="http://placehold.it/550X200/0000AA/fff?text=Third best+test+image" alt="Third test image" />
        </PhotoSlider>

        <CodeSnippet lang='jsx'>
          {`
            const PhotoApp = () => {
              return (
                <PhotoSlider>
                  <Photo src="http://placehold.it/550X200/AA0000/fff?text=First best+test+image" alt="First test image" />
                  <Photo src="http://placehold.it/550X200/AA0000/fff?text=First best+test+image" alt="First test image" />
                </PhotoSlider>
              );
            };
            render(PhotoApp);
          `}
        </CodeSnippet>

        <Toggler>
          <input toggleAction type="button" value="Toggle me" />
          <Lists>
            <h1>list</h1>
            <span>r</span>
            <span>m</span>
          </Lists>
        </Toggler>

        <h2>Inputs</h2>

        <FirstNameInput />

      </div>
    );
  }
}

render(<WebApp />, 
  document.getElementById('web-app'));