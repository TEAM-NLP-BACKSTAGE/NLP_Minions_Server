module.exports = {
    NULL_VALUE: "필요한 값이 없습니다.",
    OUT_OF_VALUE: "파라미터 값이 잘못 되었습니다.",

    SIGN_UP_SUCCESS: "회원가입 성공",
    SIGN_UP_FAIL: "회원 가입 실패",
    SIGN_IN_SUCCESS: "로그인 성공",
    SIGN_IN_FAIL: "로그인 실패",

    BOARD_CREATE_SUCCESS: "게시글 작성 성공",
    BOARD_CREATE_FAIL: "게시글 작성 실패",
    BOARD_READ_ALL_SUCCESS: "게시글 전체 조회 성공",
    BOARD_READ_ALL_FAIL: "게시글 전체 조회 실패",
    BOARD_READ_SUCCESS: "게시글 조회 성공",
    BOARD_READ_FAIL: "게시글 조회 실패",
    BOARD_UPDATE_SUCCESS: "게시글 수정 성공",
    BOARD_UPDATE_FAIL: "게시글 수정 실패",
    BOARD_DELETE_SUCCESS: "게시글 삭제 성공",
    BOARD_DELETE_FAIL: "게시글 삭제 실패",

    DATA_INPUT_SUCCESS: (x) => `수집 데이터 총 ${x}행 저장 성공`,
    DATA_INPUT_FAIL: "수집 데이터 저장 실패",

    RANKING_READ_SUCCESS: "누적포인트 랭킹 조회 성공",
    RANKING_READ_FAIL: "누적포인트 랭킹 조회 실패",

    POINT_READ_SUCCESS: "포인트 조회 성공",
    POINT_READ_FAIL: "포인트 조회 실패",

    READ_LABELLING_POST_SUCCESS: "라벨링할 포스트 데이터 조회 성공",
    READ_LABELLING_POST_FAIL: "라벨링할 포스트 데이터 조회 실패",
    
    LABEL_SAVE_SUCCESS: "라벨 저장 성공",
    LABEL_SAVE_FAIL: "라벨 저장 실패",

    RETURN_ANALYSIS_RESULT_SUCCESS: "분석 결과 반환 성공",
    RETURN_ANALYSIS_RESULT_FAIL: "분석 결과 반환 실패",

    ALREADY_ID: "존재하는 ID 입니다.",
    NO_USER: "존재하지 않는 유저 입니다.",
    NO_INSTA_USER: "해당 인스타그램 아이디를 찾을 수 없습니다.",
    NO_BOARD: "존재하지 않는 게시글 입니다.",
    NO_LABELLING_POST: "해당 카테고리에 더이상 라벨링할 포스트가 존재하지 않습니다.",
    MISS_MATCH_PW: "비밀번호가 일치하지 않습니다.",
    NO_TEAM_FEATURE: "팀별 카테고리 데이터가 존재하지 않습니다. 카테고리 데이터가 최소 하나 이상 요구됩니다.",
    INTERNAL_SERVER_ERROR: "서버 내부 오류",

    X_NULL_VALUE: (x) => `${x}가 존재하지 않습니다`,
    X_CREATE_SUCCESS: (x) => `${x} 작성 성공`,
    X_CREATE_FAIL: (x) => `${x} 작성 실패`,
    X_READ_ALL_SUCCESS: (x) => `${x} 전체 조회 성공`,
    X_READ_ALL_FAIL: (x) => `${x} 전체 조회 실패`,
    X_READ_SUCCESS: (x) => `${x} 조회 성공`,
    X_READ_FAIL: (x) => `${x} 조회 실패`,
    X_UPDATE_SUCCESS: (x) => `${x} 수정 성공`,
    X_UPDATE_FAIL: (x) => `${x} 수정 실패`,
    X_DELETE_SUCCESS: (x) => `${x} 삭제 성공`,
    X_DELETE_FAIL: (x) => `${x} 삭제 실패`,  
    NO_X: (x) => `존재하지 않는 ${x} 입니다`,
    ALREADY_X: (x) => `이미 존재하는 ${x} 입니다`,
    } 