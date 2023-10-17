import styled from '@emotion/styled';

import { Button, CompanyCard } from '~components';
import { Filters } from '~modules/Company/Filters';
import { StoriesList } from '~modules/Company/StoriesList';

export default function Company() {
  return (
    <Spacer>
      <Aside>
        <CompanyCard name={'Goggle'} rating={3.5}>
          <Button color={'purple'} size={'small'}>
            Рассказать Историю
          </Button>
        </CompanyCard>
        <Filters />
      </Aside>
      <StoriesList />
    </Spacer>
  );
}

const Spacer = styled.div`
  display: flex;
  gap: 32px;
  align-items: start;
`;

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
