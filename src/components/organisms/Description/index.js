import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from 'components/atoms/Logo';
import H2 from 'components/atoms/H2';
import DecriptionBlock from 'components/atoms/DecriptionBlock';
import Paragraph from 'components/atoms/Paragraph';

const StyledDescription = styled.div`
  max-width: 940px;
`


function Description(props) {
  return (
    <StyledDescription>
      <Logo />
      <H2>
        Оставьте заявку и станьте частью нашей команды
      </H2>
      <DecriptionBlock>
        <Paragraph>
          Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных дизайнеров, архитекторов и декораторов, дизайн-бюро и интерьерные студии — все, кто дизайн интерьера сделали своим призванием.
        </Paragraph>
        <Paragraph>
          Партнерство мы видим как доверительные отношения, основанные на честности реализации бизнес идей в сфере создания и продаж современной, качественной, удобной, функциональной и эксклюзивной мебели.
        </Paragraph>
        <Paragraph>
          Ознакомиться с проектами можете в нашем портфолио. Если Вы оформляете интерьеры жилых или коммерческих помещений — мы с радостью поможем Вам: составим уникальные условия сотрудничества, предоставим 3D модели (уточняйте у менеджеров) и разработаем коммерческое предложение к Вашему проекту или изображениям.
        </Paragraph>
      </DecriptionBlock>
    </StyledDescription>
  )
}

Description.propTypes = {}

export default Description;