import React from 'react';

export const Row = (props) => {

    const className = "flex flex-row justify-start item-start".concat(" ", props.className);

    return (
        <div key={props.Key} id={props.id} className={className} style={props.style} onClick={props.onClick} onDoubleClick={props.onDoubleClick}>
            {props.children}
        </div>
    )
};

export const RowLeft = (props) => {

    const className = "flex flex-row justify-start item-center".concat(" ", props.className);

    return (
        <div key={props.Key} id={props.id} className={className} style={props.style} onClick={props.onClick} onDoubleClick={props.onDoubleClick} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave}>
            {props.children}
        </div>
    )
};

export const RowRight = (props) => {

    const className = "flex flex-row justify-end item-center".concat(" ", props.className);

    return (
        <div key={props.Key} id={props.id} className={className} style={props.style} onClick={props.onClick} onDoubleClick={props.onDoubleClick}>
            {props.children}
        </div>
    )
};

export const RowCenter = (props) => {

    const className = "flex flex-row justify-center item-center".concat(" ", props.className);

    return (
        <div key={props.Key} id={props.id} className={className} style={props.style} onClick={props.onClick} onDoubleClick={props.onDoubleClick}>
            {props.children}
        </div>
    )
};

export const RowEvenly = (props) => {

    const className = "flex flex-row justify-evenly item-center".concat(" ", props.className);

    return (
        <div key={props.Key} id={props.id} className={className} style={props.style} onClick={props.onClick} onDoubleClick={props.onDoubleClick}>
            {props.children}
        </div>
    )
};

export const Col = (props) => {

    const className = "flex flex-col justify-start item-start".concat(" ", props.className);

    return (
        <div key={props.KEY} id={props.id} style={props.style} onClick={props.onClick} onDoubleClick={props.onDoubleClick} className={className}>
            {props.children}
        </div>
    )
};

export const ColLeft = (props) => {

    const className = "flex flex-col justify-start item-center".concat(" ", props.className);

    return (
        <div key={props.KEY} id={props.id} style={props.style} onClick={props.onClick} onDoubleClick={props.onDoubleClick} className={className} onInput={props.onInput} contentEditable={props.contentEditable}>
            {props.children}
        </div>
    )
};

export const ColRight = (props) => {

    const className = "flex flex-col justify-end item-center".concat(" ", props.className);

    return (
        <div key={props.KEY} id={props.id} style={props.style} onClick={props.onClick} onDoubleClick={props.onDoubleClick} className={className}>
            {props.children}
        </div>
    )
};

export const ColCenter = (props) => {

    const className = "flex flex-col justify-center item-center".concat(" ", props.className);

    return (
        <div key={props.KEY} id={props.id} style={props.style} onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} onDoubleClick={props.onDoubleClick} className={className}>
            {props.children}
        </div>
    )
};

export const ColEvenly = (props) => {

    const className = "flex flex-col justify-evenly item-center".concat(" ", props.className);

    return (
        <div key={props.KEY} id={props.id} style={props.style} onClick={props.onClick} onDoubleClick={props.onDoubleClick} className={className}>
            {props.children}
        </div>
    )
};
