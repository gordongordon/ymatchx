var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  render: function () {
    var {id, text, completed, createdAt, completedAt, name, location, want, price, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

   var renderSale = () =>{
     return (
     <div>
       <ul className="tabs" data-tabs id="example-tabs">
         <li className="tabs-title is-active"><a href="#panel1" aria-selected="true">Sale Home</a></li>
       </ul>
       <div className="tabs-content" data-tabs-content="example-tabs">
         <div className="tabs-panel is-active" id="panel1">
           <table>
             <thead>
               <tr>
                 <th width="100">User</th>
                 <th width="100">Building</th>
                 <th width="100">location</th>
                 <th width="100">Want</th>
                 <th width="100">Price</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td>{text}</td>
                 <td>{name}</td>
                 <td>{location}</td>
                 <td>{want}</td>
                 <td>${price}</td>
               </tr>
             </tbody>
           </table>

          <div className="secondary button-group">
    <a className="button">Waiting</a>
    <a className="button">Reject</a>
    <a className="button">Chat</a>
    <a className="button">Call</a>
           </div>
           <p className="todo__subtext">{renderDate()}</p>
        </div>
       </div>
    </div>
     )
   };

  //  <div className={todoClassName} onClick={() => {
  //      dispatch(actions.toggleTodo(id));
  //    }}>
  //      <h3>To Sale </h3>
  //    <div>
  //      <input type="checkbox" checked={completed}/>
  //    </div>
  //    <div className="row">
  //      <p>Sale: {text},{name},{location},{want},{price}</p>
  //      <p className="todo__subtext">{renderDate()}</p>
  //      <p><button className="button">Reply</button></p>
  //    </div>
  //  </div>
  //
   var renderLease = () =>{
    return (
      <div>
        <ul className="tabs" data-tabs id="example-tabs">
          <li className="tabs-title is-active"><a href="#panel1" aria-selected="true">Lease Home</a></li>
        </ul>
        <div className="tabs-content" data-tabs-content="example-tabs">
          <div className="tabs-panel is-active" id="panel1">
            <table>
              <thead>
                <tr>
                  <th width="100">User</th>
                  <th width="100">Building</th>
                  <th width="100">location</th>
                  <th width="100">Want</th>
                  <th width="100">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{text}</td>
                  <td>{name}</td>
                  <td>{location}</td>
                  <td>{want}</td>
                  <td>${price}</td>
                </tr>
              </tbody>
            </table>

           <div className="secondary button-group">
     <a className="button">Waiting</a>
     <a className="button">Reject</a>
     <a className="button">Chat</a>
     <a className="button">Call</a>
            </div>
            <p className="todo__subtext">{renderDate()}</p>
         </div>
        </div>
     </div>

   )
 };

   var renderRent = () =>{
     return (
     <div>
       <ul className="tabs" data-tabs id="example-tabs">
         <li className="tabs-title is-active"><a href="#panel1" aria-selected="true">Rend Home</a></li>
       </ul>
       <div className="tabs-content" data-tabs-content="example-tabs">
         <div className="tabs-panel is-active" id="panel1">

           <table>
             <thead>
               <tr>
                 <th width="100">User</th>
                 <th width="100">Building</th>
                 <th width="100">location</th>
                 <th width="100">Want</th>
                 <th width="100">Price/Month</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td>{text}</td>
                 <td>{name}</td>
                 <td>{location}</td>
                 <td>{want}</td>
                 <td>${price}</td>
               </tr>
             </tbody>
           </table>

             <div className="secondary button-group">
       <a className="button">Waiting</a>
       <a className="button">Reject</a>
       <a className="button">Chat</a>
       <a className="button">Call</a>
              </div>

           <p className="todo__subtext">{renderDate()}</p>
        </div>
       </div>
    </div>
   )
 };

   var renderBuy = () =>{
     return (
       <div>
         <ul className="tabs" data-tabs id="example-tabs">
           <li className="tabs-title is-active"><a href="#panel1" aria-selected="true">Buy Home</a></li>
         </ul>
         <div className="tabs-content" data-tabs-content="example-tabs">
           <div className="tabs-panel is-active" id="panel1">
             <table>
               <thead>
                 <tr>
                   <th width="100">User</th>
                   <th width="100">Building</th>
                   <th width="100">location</th>
                   <th width="100">Want</th>
                   <th width="100">Price</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>{text}</td>
                   <td>{name}</td>
                   <td>{location}</td>
                   <td>{want}</td>
                   <td>${price}</td>
                 </tr>
               </tbody>
             </table>

            <div className="secondary button-group">
      <a className="button">Waiting</a>
      <a className="button">Reject</a>
      <a className="button">Chat</a>
      <a className="button">Call</a>
             </div>
             <p className="todo__subtext">{renderDate()}</p>
          </div>
         </div>
      </div>

   )
 };

 var renderTodo = () =>{
   return (
   <div className={todoClassName} onClick={() => {
       dispatch(actions.toggleTodo(id));
     }}>
     <div>
       <input type="checkbox" checked={completed}/>
     </div>
     <div className="row">
       <p>Todo: {text}</p>
       <p className="todo__subtext">{renderDate()}</p>
     </div>
   </div>
 )
};

   var renderWant = ( want ) => {
     switch ( want ) {
       case 'sale' : return renderSale(); break;
       case 'buy' : return renderBuy(); break;
       case 'rent' : return renderRent(); break;
       case 'lease' : return renderLease(); break;
       default :
          return renderTodo();
     }
   };

  return (
      <div className="">
        {renderWant(want)}
      </div>
    )
  }
});

export default connect()(Todo);
