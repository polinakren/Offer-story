import styled from '@emotion/styled';

import starStruck from '~assets/images/icons/Star-struck.svg';
import search from '~assets/images/icons/Search.svg';
import { Button, Form, Input, Text, CompanyCard } from '~components';
import { Palette } from '~utils/styles/Palette';

export default function Home() {
  const handleButtonClick = () => {
    //TODO: Navigate to /step/steps
  };

  return (
    <Spacer>
      <QuestionBlock>
        <Emoji src={starStruck} alt='Эмоджи' />
        <Text styleName={'extra_bold_6'} color={Palette.c_secondary_800}>
          Проходили собес?
        </Text>
        <Button color={'purple'} size={'large'} onClick={handleButtonClick}>
          Рассказать Историю
        </Button>
      </QuestionBlock>

      <SearcherBlock>
        <Searcher>
          <Text styleName={'extra_bold_6'} color={Palette.c_secondary_800}>
            Как пройти в компанию мечты и получить оффер?
          </Text>
          <StyledForm initialValues={{ company: '' }}>
            <Input size={'large'} placeholder={'Введите название компании'} name={'company'} />
            <Button htmlType='submit' color={'purple'} size={'middle'}>
              <img src={search} alt={'search'} />
            </Button>
          </StyledForm>
        </Searcher>
        <CompanyCard name={'Яндекс'} rating={3.5} />
        <CompanyCard name={'Google'} rating={4.0} />
      </SearcherBlock>
    </Spacer>
  );
}

const Spacer = styled.div`
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
`;

const Emoji = styled.img`
  margin-bottom: 12px;
`;

const QuestionBlock = styled.div`
  max-width: 384px;
  text-align: center;
  background-color: ${Palette.c_white_50};
  border-radius: 50px;
  box-shadow: 4px 4px 28px ${Palette.c_shadow_block};
  padding: 64px;

  p {
    margin-bottom: 40px;
  }
`;

const SearcherBlock = styled.div`
  max-width: 732px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Searcher = styled.div`
  margin-bottom: 32px;
  padding: 64px;
  background-color: ${Palette.c_white_50};
  border-radius: 50px;
  box-shadow: 4px 4px 28px ${Palette.c_shadow_block};

  p {
    margin-bottom: 40px;
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
