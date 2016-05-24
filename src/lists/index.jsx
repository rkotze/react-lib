import React from 'react';

export const Lists = ({children}) => {
    // React.Children.map(children, (item) => (
    //   console.log(item)
    // ));
    return (
      <ul>
        {
          React.Children.map(children, (childNode) => (
              <li>{childNode}</li>
            ))
        }
      </ul>
    );
}