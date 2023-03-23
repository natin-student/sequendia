import './styles/challenge.css'
import './styles/intro.css'

export default function Challenge() {

    const challenge = {
        question: (
        <p id='question'>
            I am <span id='a' onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}></span>. 
            I <span id='b' onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}></span>
            the system, but I am <span id='c' onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}></span> 
            of it.
        </p>
        ),
        answers: ['an actor', 'interact with', 'not a part', 'a stickman', 'make money', 'the boss'],
        correct: ['an actor', 'interact with', 'not a part']
    }

    const allowDrop = (e) => {
        e.preventDefault();
    }

    const drag = (e) => {
        e.dataTransfer.setData("text", e.target.id);
    };

    const drop = (e) => {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        e.target.textContent = document.getElementById(data).textContent;
    };

    const checkIce = () => {
        let test = document.getElementById("question").children;
        let melding = document.getElementById("melding");
        let goed = 0;

        for (let i = 0; i < test.length; i++) {
            if (test[i].innerHTML === challenge.correct[i]) {
                test[i].style.color = '#fff';
                test[i].style.border = 'none';
                goed++;
            } else {
                test[i].style.color = 'red';
                test[i].style.border = '1 px solid red';
            }
        }

        if (goed === 3) {
            melding.innerHTML = "Je hebt de challenge gehaald!"
        } else {
            melding.innerHTML = "Je bent straight up trash!"
        }
    }

    return (
        <>
            <div className='ch-name'>
                <h1>What am I?</h1>
            </div>

            <div className='challenge'>
                {challenge.question}
            </div>

            <div className='options'>
                {
                    challenge.answers && challenge.answers.map((item, index) => (
                        <span 
                            id={index}
                            onDragStart={(e) => drag(e, index)}
                            key={index}
                            draggable
                        >
                            {item}
                        </span>
                    ))
                }
            </div>

            <div className='check-ice'>
                <button onClick={checkIce}>Check Ice</button>
            </div>

            <p id='melding'></p>
        </>
    )
}