export const updateReduxAction = (actionType, data) => {
	return {
		type: actionType,
		newState: data
	};
};
export function mapDispatchToProps(dispatch) {
	return {
		updateRedux: (actionType, data) => dispatch(updateReduxAction(actionType, data))
	};
}
