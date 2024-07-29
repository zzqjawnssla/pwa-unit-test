export const getTableCellHeadStyle = (fontSize = '12px') => ({
    fontSize: `${fontSize}`,
    paddingTop: '4px',
    paddingBottom: '4px',
    textAlign: 'center',
    whiteSpace: 'nowrap', // 줄바꿈 없이 한 줄로 표시
    // overflow: 'hidden', // 내용이 넘칠 경우 숨김
    // textOverflow: 'ellipsis', // 넘치는 내용은 ...으로 표시
    backgroundColor: 'grey',
    color: 'white'
})

export const getTableCellBodyStyle = (fontSize = '12px') => ({
    fontSize: `${fontSize}`,
    paddingTop: '4px',
    paddingBottom: '4px',
    textAlign: 'center',
    whiteSpace: 'nowrap', // 줄바꿈 없이 한 줄로 표시
    // overflow: 'hidden', // 내용이 넘칠 경우 숨김
    // textOverflow: 'ellipsis', // 넘치는 내용은 ...으로 표시
    backgroundColor: 'transparent',
    color: 'white'
})