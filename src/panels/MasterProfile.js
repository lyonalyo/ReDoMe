import React, {Fragment, Component} from 'react';
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

class MasterProfile extends Component {
	constructor(props) {
		super(props);
		this.state = { loading: true, data: null, fetchedUser: props.fetchedUser };
	}


	componentDidMount() {
		console.log(this.props);
		const { id, fetchedUser, go }= this.props;
		fetch('https://redome.simplex48.ru:43210/ReDoMeApi/GetBarber?barber=' + fetchedUser.id)
			.then(response => response.json())
			.then(json => this.setState( {loading: false, data: json} ))
	}

	render() {
		const { loading, data } = this.state;
		const { id, fetchedUser, go }= this.props;

		if (loading) {
			return (
				<Panel id={id}>
					<PanelHeader></PanelHeader>
					<Group>
						<Header separator="hide" mode="secondary">loading...</Header>
					</Group>
				</Panel>
			)
		}


		return (
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
							{console.log(this.props)}{data.spec}
						</InfoRow>
					</SimpleCell>
					<SimpleCell>
						<InfoRow header="Место работы">
							{data.address}
						</InfoRow>
					</SimpleCell>
					<SimpleCell>
						<InfoRow header="Контактный телефон">
							{data.phone}
						</InfoRow>
					</SimpleCell>
					<SimpleCell>
						<InfoRow header="Сертификаты">
							{data.certs}
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
		)
	}
}

export default MasterProfile



MasterProfile.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		screen_name: PropTypes.string,
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	})
};
