import React from 'react';

export const Lists = ({children, className}) => {
    // React.Children.map(children, (item) => (
    //   console.log(item)
    // ));
    return (
      <ul className={className}>
        {
          React.Children.map(children, (childNode) => (
              <li>{childNode}</li>
            ))
        }
      </ul>
    );
}