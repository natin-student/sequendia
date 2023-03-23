import './styles/intro.css'
import { useState } from 'react';
import actor from './images/actor.png';
import lifeline from './images/lifeline.png';
import activation from './images/activation.png';
import callmessage from './images/call-message.png';
import createmessage from './images/create-message.png';
import returnmessage from './images/return-message.png';
import durationmessage from './images/duration-message.png';
import destroymessage from './images/destroy-message.png';
import recursivemessage from './images/recursive.png';
import selfmessage from './images/self-message.png';
import note from './images/note.png';
import fragment from './images/fragment.png';


import Challenge from './challenge';

export default function Intro(props) {
    const [introduce, setIntroduce] = useState(false);
    const [elem, setElem] = useState(0);
    const [renderChallenge, setRenderChallenge] = useState(false);

    let elements = [
        [
            'Actor',
            'Lifeline',
            'Activation',
            'Call Message',
            'Return Message',
            'Self Message',
            'Recursive Message',
            'Create Message',
            'Destroy Message',
            'Duration Message',
            'Note',
            'Fragment',
        ],
        [
            actor,
            lifeline,
            activation,
            callmessage,
            returnmessage,
            selfmessage,
            recursivemessage,
            createmessage,
            destroymessage,
            durationmessage,
            note,
            fragment
        ],
        [
            'actor.svg',
            'lifeline.png',
            'activation.png',
            'call-message.png',
            'return-message.png',
            'self-message.png',
            'recursive-message.png',
            'create-message.png',
            'destroy-message.png',
            'duration-message.png',
            'note.png',
            'fragment.png',
        ],
        [
            'I am an actor. I am not a part of the system.' +
             'I am an entity which interacts with the system.',

             'A lifeline represents an individual participant in the Interaction.',
             'A thin rectangle on a lifeline) represents the period during which an element is performing an operation\n' + 
            'The top and the bottom of the of the rectangle are aligned with the initiation and the completion time respectively',

            'A message defines a particular communication between Lifelines of an Interaction.\n' +
            'Call message is a kind of message that represents an invocation of operation of target lifeline.',

            'A message defines a particular communication between Lifelines of an Interaction\n.' + 
            'Return message is a kind of message that represents the pass of information back to the caller of a corresponded former message.',

            'A message defines a particular communication between Lifelines of an Interaction.\n' + 
            'Self message is a kind of message that represents the invocation of message of the same lifeline.',

            'A message defines a particular communication between Lifelines of an Interaction.\n' + 
            'Recursive message is a kind of message that represents the invocation of message of the same lifeline\n.' + 
            'It\'s target points to an activation on top of the activation where the message was invoked from.',

            'A message defines a particular communication between Lifelines of an Interaction.\n' + 
            'Create message is a kind of message that represents the instantiation of (target) lifeline.',

            'A message defines a particular communication between Lifelines of an Interaction.\n' +
            'Destroy message is a kind of message that represents the request of destroying the lifecycle of target lifeline.',

            'A message defines a particular communication between Lifelines of an Interaction.\n' + 
            'Duration message shows the distance between two time instants for a message invocation.',

            'A note (comment) gives the ability to attach various remarks to elements.\n' + 
            'A comment carries no semantic force, but may contain information that is useful to a modeler.',

            'UML 2.0 introduces sequence (or interaction) fragments. Sequence fragments make it easier to create and maintain accurate sequence diagrams\n' + 
            'A sequence fragment is represented as a box, called a combined fragment, which encloses a portion of the interactions within a sequence diagram\n' +
            'The fragment operator (in the top left cornet) indicates the type of fragment\n' +
            'Fragment types: ref, assert, loop, break, alt, opt, neg'




        ]
    ]

    const previous = () => {
        if (elem > 0) {
            let num = elem;
            setElem(num -= 1);
        } else {
            setIntroduce(false);
        }
    }

    const next = () => {
        if (elem === (elements[0].length - 1)) {
            setIntroduce(false);
            setRenderChallenge(true);
            console.log(renderChallenge)
        } else {
            let num = elem;
            setElem(num += 1);
        }
    }

    if (introduce) {
        return (
            <>
                <div className='title'>
                    <h1>{elements[0][elem]}</h1>
                </div>
                <div className='symbol'>
                    <img src={elements[1][elem]} alt={elements[2][elem]}/>
                </div>
                <div className='details'>
                    <p>{elements[3][elem]}</p>
                </div>
                <div className='controls'>
                    <button onClick={previous}>Previous</button>
                    <button onClick={next}>Next</button>
                </div>
            </>
        )
    }

    if (renderChallenge) {
        return (<Challenge/>)
    }
    return (
        <div className='Intro-game'>
            <div className='header'>
                <h1>Introduction</h1>
                <p>
                    Welcome to the introduction to sequence diagrams. Here all
                    the sequence diagram elements are going to introduce themselves. 
                </p>
            </div>
            <div className='action'>
                <p>Ready to meet them? Click below to get to know them!</p>
                <button onClick={() => setIntroduce(true)}>Introduce them!</button>
            </div>
        </div>
    );
}