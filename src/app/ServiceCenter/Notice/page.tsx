'use client'
import React, { useState } from "react";
import './notice.css';
export default function Notice(){
    const [check_view, set_check_view] = useState(false);
    const notice_click = () =>{
        set_check_view(!check_view);
    };

    return(
        <div className="ServiceCenter-page ServiceCenter-page-1">
		    <table className = "table table-striped table-hover">
			    <thead>
			        <tr id = "title">
					    <th className = "number">번호</th>
					    <th className = "title">제목</th>
					    <th className = "name">작성자</th>
					    <th className = "data">날짜</th>
				    </tr>
			    </thead>

			    <tbody onClick={notice_click}>
				    <tr id = "data1" className = "notice" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="posts1">
					    <th className = "number">1</th>
					    <th className = "title">홈페이지가 새롭게 단장했습니다.</th>
					    <th className = "name">관리자</th>
					    <th className = "data">2023-09-01</th>
				    </tr>
				    <tr id = {check_view ? "post1_view" : "post1"} className="panel-collapse collapse" role="tabpanel" aria-labelledby="posts1">
					    <th className = "sub panel-body" colSpan={4}><br/>억조종합기계(주) 홈페이지를 새롭게 단장했습니다.<br/>
					    많은 방문 바랍니다<br/><br/><br/><br/><br/><br/><br/><br/></th>
				    </tr>
			    </tbody>
            </table>
	    </div>
    );
}