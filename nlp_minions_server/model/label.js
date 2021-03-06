const pool = require('../module/pool');
const table1 = 'POST';
const table2 = 'INSTA_PROFILE';
const table3 = 'LABEL';
const table4 = 'CODE';
const table5 = 'USER';

module.exports = {
    getPost : async (team_idx) => {
        //아직 라벨링 되지 않은 포스트 하나 랜덤으로 가져오기

        // 방법1. 장점 : 쿼리 간결, 랜덤 출력 잘됨          단점 : 너무 느림(20초)
        //const result = await pool.queryParam_None(`SELECT P.post_idx, P.inner_id, P.content, P.region_tag, P.hashtag, IP.insta_id, IP.profile FROM ${table1} AS P LEFT JOIN ${table2} AS IP ON P.inner_id = IP.inner_id LEFT JOIN ${table3} AS L ON P.post_idx = L.post_idx WHERE L.label_idx IS NULL AND P.team_idx = ${team_idx} ORDER BY RAND() LIMIT 1;`);
        
        // 방법2. 장점 : 빠름(1초)                         단점 : 랜덤 출력 안됨, 반환값이 없는 경우 발생, 쿼리 복잡
        //const result = await pool.queryParam_None(`SELECT P.post_idx, P.inner_id, P.content, P.region_tag, P.hashtag, IP.insta_id, IP.profile FROM ${table1} AS P JOIN (SELECT post_idx FROM ${table1} ORDER BY RAND()) AS R ON P.post_idx = R.post_idx LEFT JOIN ${table2} AS IP ON P.inner_id = IP.inner_id LEFT JOIN ${table3} AS L ON P.post_idx = L.post_idx WHERE L.label_idx IS NULL AND P.team_idx = ${team_idx} LIMIT 1;`);
        
        // 방법3. 장점 : 빠름(1.5초), 랜덤 출력 잘됨    단점: 쿼리 복잡
        const result = await pool.queryParam_None(`SELECT P.post_idx, P.inner_id, P.content, P.region_tag, P.hashtag, IP.insta_id, IP.profile FROM ${table1} AS P JOIN (SELECT post_idx FROM ${table1} WHERE team_idx = ${team_idx} ORDER BY RAND() LIMIT 1) AS R ON P.post_idx = R.post_idx LEFT JOIN ${table2} AS IP ON P.inner_id = IP.inner_id LEFT JOIN ${table3} AS L ON P.post_idx = L.post_idx WHERE L.label_idx IS NULL;`);
        
        return result;
    },

    
    initLabel: async (user_idx, post_idx, inner_id, team_idx) => {
        const fields = 'user_idx, post_idx, inner_id';
        const questions = `"${user_idx}", "${post_idx}", "${inner_id}"`;
        var insertLabelResult = await pool.queryParam_None(`INSERT INTO ${table3}(${fields})VALUES(${questions})`);
        var str_label_idx = String(insertLabelResult.insertId)  //쿼리 결과 패킷안의 insertId: 마지막으로 insert된 값의 PK를 가져옴
        
        if(team_idx == 1){ //성별&나이 카테고리 라벨링시, 각각의 라벨 두개 동시에 생성/리턴
            const insertLabelResult2 = await pool.queryParam_None(`INSERT INTO ${table3}(${fields})VALUES(${questions})`);
            str_label_idx = str_label_idx + ',' + String(insertLabelResult2.insertId)
        }
        return str_label_idx;
    },

    saveLabel: async (label_idx, user_idx, answer) => {
        const result1 = await pool.queryParam_None(`UPDATE ${table3} set labeling = (SELECT simple_word FROM ${table4} WHERE category_type = "${answer}"), STATE = 'C' WHERE label_idx = ${label_idx};`)
        //console.log(result1)
        const result2 = await pool.queryParam_None(`UPDATE ${table5} set point = point + 1, stack_point = stack_point + 1 WHERE user_idx = ${user_idx};`)
        //console.log(result2)
        if(result1.affectedRows == 0 || result2.affectedRows == 0){ //
            return []
        }
        else{
            return result2;
        }
    }
}