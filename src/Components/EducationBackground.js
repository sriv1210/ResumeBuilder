import React, { useState } from "react";

export default function EducationBackground() {

    const [inputListEdu, setInputListEdu] = useState([{ from: "", to: "", name: "", summary: "" }]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputListEdu];
        list[index][name] = value;
        setInputListEdu(list);
    };
    // const handleInputChange = (e, index) => {
    //     const { name, value } = e.target;
    //     const list = [...inputListEdu];
    //     list[index][name] = value;
    //     setInputListEdu(list);
    //   };


    // handle click event of the Remove button
    const handleRemoveClick = (e,index) => {
        const list = [...inputListEdu];
        list.splice(index, 1);
        setInputListEdu(list);
    };

    // handle click event of the Add button
    const handleAddClick = (e) => {
        setInputListEdu([...inputListEdu, { from: "", to: "", name: "", summary: "" }]);
    };
    return (
        <React.Fragment>

            {inputListEdu.map((x, i) => {
                return (
                    <div className="row border border-grey rounded mt-2">

                        {/* From */}
                        <div className="col-lg-4 text-start">
                            <div className="form-group mt-2">
                                <label htmlFor="from">From:</label>
                                <input type="text" id="from" onChange={e => handleInputChange(e, i)}
                                    className="form-control" name="from" value={x.from} aria-describedby="fromHelp" placeholder="Enter Year" />
                                {/* <small id="nameHelp" className="form-text text-muted">We'll never share your details with anyone else.</small> */}

                            </div>
                        </div>
                        {/* To */}
                        <div className="col-lg-4 text-start">
                            <div className="lead">
                                <div className="form-group mt-2">
                                    <label htmlFor="to">To:</label>
                                    <input type="text" name="to" onChange={e => handleInputChange(e, i)} className="form-control" id="to" aria-describedby="toHelp"
                                        value={x.to} placeholder="Enter Year" />
                                    {/* <small id="nameHelp" className="form-text text-muted">We'll never share your details with anyone else.</small> */}
                                </div>
                            </div>
                        </div>

                        {/* Name */}
                        <div className="form-group mt-1">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" onChange={e => handleInputChange(e, i)} className="form-control" aria-describedby="edunameHelp"
                                placeholder="Enter Institution name" value={x.name} id="name" />
                            {/* <small id="nameHelp" className="form-text text-muted">We'll never share your details with anyone else.</small> */}
                        </div>

                        {/* Summary */}
                        <div className="form-group mt-1 mb-1">
                            <label htmlFor="edusummary">Summary:</label>
                            <textarea name="summary" value={x.summary} onChange={e => handleInputChange(e, i)} className="form-control" id="summary" rows="4"></textarea>
                        </div>
                        <div className="form-group m-3">
                            <div className="btnibox">
                                {inputListEdu.length !== 1 &&
                                    <button type="button" className="btn border border-grey" onClick={() => handleRemoveClick(i)}>Remove <i className="fa fa-minus-circle"></i></button>}
                                {inputListEdu.length - 1 === i && <button type="button" className="btn border border-grey" onClick={handleAddClick}>Add <i className="fa fa-plus-circle"></i></button>}
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputListEdu)}</div> */}


        </React.Fragment>
    )
}
