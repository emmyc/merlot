import { Link } from 'gatsby';
import React from 'react';
import '../../scss/main.scss';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';

function ProjectModalComponent(props) {
  if (!props.active) {
    return null;
  }
  return (
    <ModalRoutingContext>
      {({ modal, closeTo }) => (
        <div className='modal'>
          {modal ? (
            <Link to='/'>Close</Link>
          ) : (
            <header>
              <h1>Website Title</h1>
            </header>
          )}

          <h2>Modal Page</h2>

          <Link to='/'>Go back to the homepage</Link>
        </div>
      )}
    </ModalRoutingContext>
  );
}
export default ProjectModalComponent;
