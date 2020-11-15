const express = require('express');
const router = express.Router();
const util = require('../../modules/util');
const responseMessage = require('../../modules/responseMessage');
const statusCode = require('../../modules/statusCode');
let membersDB = require('../../modules/members');

/** 멤버를 생성 */
router.post('/', (req, res) => {
    // Request 바디에서 받아올 값들을 선언!
    const { name, part, age } = req.body;

    // 만약 클라이언트(post man)에서 필요한 정보를 안보내주면, 
    // 서버가 원하는 요청이 아니니 BAD REQUEST로 응답해주기!
    // 클라이언트를 넘 믿지말 것~ 클라나빠~~~
    // BAD_REQUEST = 400 ?
    if(!name || !part || !age) {
        console.log('필요한 값이 없습니다~!');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));   
    }
    const idx = membersDB[membersDB.length - 1].idx + 1;
    
    // key-value 쌍으로 되어있는 객체는 두 값이 같으면 value값 생략 가능
    membersDB.push({
        idx,
        name,
        part,
        age
    })
    return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_CREATE_SUCCESS, membersDB));
});


/** 모든 멤버 조회 */
router.get('/:idx', (req, res) => {
    const { idx } = req.params;

    if( !idx ) {
        console.log('필요한 값이 없습니다!');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    const member = membersDB.find(member => member.idx == idx);
    
    if (member === undefined) {
        console.log('idx가 유효하지 않습니다.');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }
    return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_READ_SUCCESS, member));
})


/** idx값으로 특정 멤버 삭제 */
router.delete('/:idx', (req, res) => {
    const { idx } = req.params;

    if( !idx ) {
        console.log('필요한 값이 없습니다!');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    const member = membersDB.filter(member => member.idx == idx);
    
    if (member.length === 0) {
        console.log('idx가 유효하지 않습니다.');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    membersDB = membersDB.filter(member => member.idx != idx);
    return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_DELETE_SUCCESS, membersDB));
});


/** idx값으로 특정 멤버 정보 수정 */
router.put('/:idx', (req, res) => {
    const { idx } = req.params;
    const { name, part, age } = req.body;

    if ( !idx ) {
        console.log("필요한 값이 없습니다~");
        return res.status(statusCode.BAD_REQUEST), send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE))
    }

    if ( !idx ) {
        console.log("필요한 값이 없습니다~");
        return res.status(statusCode.BAD_REQUEST), send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE))
    }

    const memberIdx = memberDB.findIndex(member => member.idx == idx);

    if ( memberIdx === -1 ) {
        console.log("idx가 유효하지 않습니다.");
        return res.status(statusCode.BAD_REQUEST), send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE))
    }

    membersDB[memberIdx] = {
        idx: Number.parseInt(idx),
        name,
        part,
        age,
    }

    return res.status(statusCode.OK), send(util.success(statusCode.OK,  responseMessage.MEMBER_UPDATE_SUCCESS, membersDB));

});
module.exports = router;
