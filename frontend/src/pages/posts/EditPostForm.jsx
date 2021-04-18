import React from "react";

export default function EditPostForm({onSubmit}) {
  const [body, setBody] = React.useState("");
 console.log("Hello");
 console.log(onSubmit);
  const handleSubmit = () => {
    // Invoke the passed in event callback
    //onSubmit({ body: body });
 
    // Clear the input field
    setBody("");
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Edit your Post</h4>
        <div>
          <div className="form-group">
            <textarea
              className="form-control"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
