import AddButton from "../AddButton";
import Body from "../Body";
import Card from "../Card";

function PreviewSection({questions, addQuestion, moveUpQustion, moveDownQuestion, deletQuestion}) {
    return (
        <div>
        {questions.map((question, index) => (
            <Card key={index} title={question.title} desc={question.desc}
            onUpButtonClick={() => moveUpQustion(index)}
            onDownButtonClick={() => moveDownQuestion(index)}
            onDeleteButtonClick={() => deletQuestion(index)}
            >
                <Body type={question.type} options={question.options}></Body>
            </Card>
        ))}
        <AddButton onClick={addQuestion}/>
        </div>
    );
}

export default PreviewSection;