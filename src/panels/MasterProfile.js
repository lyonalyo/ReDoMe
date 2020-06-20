import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import {CellButton, Header, SimpleCell, Link, InfoRow, CardGrid, Card} from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import {IOS, platform} from "@vkontakte/vkui";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";

import logo from "../img/logo.png";
import './logoheader.css';



const osName = platform();


const MasterProfile = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		><img className="LogoHeader" src={logo} alt="RE-DO-ME"/></PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Bridge">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}
		<Group>
			<Header aside={<Link>Редактировать</Link>}>
				Информация
			</Header>
			<SimpleCell multiline>
				<InfoRow header="Специализация">
					парикмахер-стилист
				</InfoRow>
			</SimpleCell>
			<SimpleCell>
				<InfoRow header="Место работы">
					Салон InStyle, ул. Московская, д.52
				</InfoRow>
			</SimpleCell>
			<SimpleCell>
				<InfoRow header="Контактный телефон">
					+7(906)578-87-96
				</InfoRow>
			</SimpleCell>
			<SimpleCell>
				<InfoRow header="Сертификаты">
					123
				</InfoRow>
			</SimpleCell>
		</Group>

		<Group separator="hide" header={<Header mode="secondary">Портфолио</Header>}>
			<CardGrid>
				<Card size="s">
					<div style={{ height: 96 }} />
				</Card>
				<Card size="s">
					<div style={{ height: 96 }} />
				</Card>
				<Card size="s">
					<div style={{ height: 96 }} />
				</Card>
			</CardGrid>
			<CellButton before={<Icon24Add />}>Добавить работу</CellButton>
		</Group>

	</Panel>
);



MasterProfile.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	})
};

export default MasterProfile;
