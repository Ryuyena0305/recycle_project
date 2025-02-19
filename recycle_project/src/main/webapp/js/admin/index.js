// 승인할 게시물 전체 조회
const findAll = () => {
	const page = new URL(location.href).searchParams.get('page')
	if(page == null){
		page = 1;
	}
	
	console.log(page);
	const option = {
		method :  'GET'
	}
	
	fetch(`/recycle_project/board/acc?page=${page}`, option)
		.then(r => r.json())
		.then(data =>{
			const boardData = document.querySelector('.boardlist > tbody')
			let html = ``
			let boardList = data.data
			boardList.forEach( (board) => {
				html += `
						<tr>
							<td style="width: 8.571428571428571%;"> ${board.bno} </td>
							<td style="width: 40%;"> ${board.btitle} </td>
							<td style="width: 8.571428571428571%;"> ${board.mnickname} </td>
							<td style="width: 8.571428571428571%;"> ${board.bdate.split(' ')[0]} </td>
							<td style="width: 8.571428571428571%;"> ${board.bpeople} </td>
							<td style="width: 8.571428571428571%;"> ${board.bview} </td>
							<td style="width: 8.571428571428571%;"> ${board.blike} </td>
							<td style="width: 8.571428571428571%;">
								<button class="btn btn-secondary" style="background-color: #658a69; padding-bottom: 26px; height: 20px;" type="button" onclick="onDetail(${board.bno})">상세조회</button>
							</td>
						</tr>
						`
			})
			boardData.innerHTML = html;
			getPageBtn(data, 'index');
		})
		.catch(e => {console.log(e);})
		
}
findAll();

// 상세조회 페이지로 이동
const onDetail = (bno) => {
	location.href=`/recycle_project/jsp/admin/acc.jsp?bno=${bno}`;
}






















