import { TruckOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const {Item} = Form;

function OptionSection() {
  const [form] = Form.useForm();
  const question = useSelector((state) =>
    state.selectedQuestionId.data === null
     ? null
     : state.survey.data.questions[state.selectedQuestionId.data],
  );
  useEffect(() => {
    if(!question) return;

    form.getFieldsValue({
      title: question.title,
      desc: question.desc,
    }, [form, question]);
  })
  return (
    <OptionSectionWrapper>
      <Title>문항 옵션</Title>
      <FormWapper>
        {question ? (
          <Form
            form = {form}
            name="option-form"
            layout={'vertical'}
          >
            <SubTitle>공통 옵션</SubTitle>
            <Item
              label="질문"
              name="title"
              rules={[{ required: TruckOutlined}]}
            >
              <Input />
            </Item>
            <Item
              label="설명"
              name="desc"
              rules={[{ required: TruckOutlined}]}
            >
              <Input />
            </Item>
            <Item>
              <Button type="primary" onClick={() => {console.log(
              )}}>적용</Button>
            </Item>
          </Form>
        ) : "질문을 선택해주세요"}
      </FormWapper>
    </OptionSectionWrapper>
  );
}

const OptionSectionWrapper = styled.div`
  height: 100%;
  background: #fff;
  border-left: 1px solid #ddd;
`;

const Title = styled.div`
  font-size: 500;
  background: #f0f0f0;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  text-align: center;
`;

const SubTitle = styled.div`
  font-size: 1.03rem;
  font-weight: 600;
  margin: 10px 0;
`;

const FormWapper = styled.div`
  padding: 20px;
`;


export default OptionSection;