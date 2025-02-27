/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PageHeader } from '@/app/common/PageHeader';

export default function servicePolicy() {
  return (
    <div className="pb-10 pt-2 shadow-2xl shadow-gy-100">
      <PageHeader title={'서비스 이용약관'} />
      <div className="space-y-5 px-5 text-gy-700">
        <p className="text-sm font-semibold">제 1 장 총칙</p>
        <div className="space-y-2">
          <p className="text-xs font-semibold">제 1 조 (목적)</p>
          <p className="text-[10px]">
            이 약관은 라인업지팀(이하 "팀")이 제공하는 라인업지 서비스(이하
            "서비스")의 이용과 관련하여 "팀"과 "회원"(제2조에서 정의합니다) 간의
            권리, 의무 및 책임사항, "회원"의 "서비스" 이용 절차에 관한 사항을
            규정함을 목적으로 합니다. 이 약관은 "팀"이 제공하는 "서비스" 일체에
            적용됩니다.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold">제 2 조 (용어의 정의)</p>
          <p className="text-[10px]">
            본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
          </p>
        </div>

        <div className="text-[10px]">
          <p>
            1. "서비스"란 "팀"이 제공하는 주점에 대한
            예약∙대기신청∙정보제공∙추천∙티켓 구매∙상품 구매(이에 한정되지 않음)
            등을 위한 온라인 플랫폼 서비스를 의미합니다. 서비스는 구현되는
            장치나 단말기(PC, TV, 휴대형 단말기 등의 각종 유무선 장치를 포함하며
            이에 한정되지 않음)와 상관 없이 라인업지 및 라인업지 관련
            웹(Web)∙앱(App) 등의 제반 서비스를 의미하며, 팀이 공개한 API를
            이용하여 제3자가 개발 또는 구축한 프로그램이나 서비스를 통하여
            회원에게 제공되는 경우를 포함합니다.
          </p>
          <p>
            2. "회원"이란 "서비스"에 접속하여 본 약관에 따라 "팀"과 이용계약을
            체결하고 "팀"이 제공하는 서비스를 이용하는 고객을 말합니다.
          </p>
          <p>
            3. "주점 관리자"이라 함은 "팀"이 제공하는 "서비스"를 이용하여 자신의
            상품 등을 판매하는 자를 의미하며, 팀으로부터 예약∙대기신청∙판매
            대행∙판매 중개, 광고 서비스 등을 제공받는 자를 말합니다.
          </p>
          <p>
            4. "가입신청인"이라 함은 이 약관에 의하여 "회원"이 되고자 하는
            사람을 말합니다.
          </p>
          <p>
            5. 본 약관에서 사용하는 용어 중 본 조에서 정하지 아니한 사항은 관계
            법령에서 정하는 바에 따르며, 그 외에는 일반 관례에 따릅니다.
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold">제 3 조 (약관의 게시와 개정)</p>
          <div className="text-[10px]">
            <p>
              1. 본 약관은 "회원"이 서비스 가입 및 이용시 열람 할 수 있으며,
              "팀"은 본 약관의 내용을 "회원"이 쉽게 열람할 수 있도록 라인업지
              서비스 홈페이지(이하 "홈페이지") 또는 연결화면을 통하여
              게시합니다.
            </p>
            <p>
              2. "팀"은 『약관의 규제에 관한 법률』, 『전자상거래 등에서의
              소비자보호에 관한 법률(이하 “전자상거래법”)』, 『정보통신망
              이용촉진 및 정보보호(이하 "정보통신망법")』, 『소비자기본법』,
              『전자문서 및 전자거래 기본법』 등 관련법에 위배되지 않는 범위
              내에서 본 약관을 개정할 수 있습니다.
            </p>
            <p>
              3. "팀"은 "약관"을 개정할 경우 개정내용과 적용일자를 명시하여
              제5조에 따른 방법으로 적용일자 7일 전부터 적용일자 전일까지
              공지합니다. 다만, "이용자"에게 불리하게 개정되는 경우에는 적용일자
              30일 전부터 적용일자까지 공지하고, 제5조에 따른 방법으로 별도로
              통지합니다.
            </p>
            <p>
              4. "팀"이 전항에 따라 개정약관을 공지하면서 일정한 기간 내에
              의사표시를 하지 않으면 의사표시가 표명된 것으로 본다는 뜻을
              명확하게 공지 또는 통지하였음에도 "회원"이 명시적으로 거부의
              의사표시를 하지 아니한 경우 개정약관에 동의한 것으로 봅니다.
            </p>
            <p>
              5. "회원"은 개정약관에 동의하지 않는 경우에는 개정 약관의 적용일
              이전에 명시적인 거부 의사를 표시하고 이용계약을 해지할 수
              있습니다.
            </p>
            <p>
              6. "회원"은 약관 변경에 대하여 주의의무를 다하여야 하며, 개정
              약관의 부지로 인한 "회원"의 피해는 "팀"이 책임지지 않습니다.
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold">
            제 4 조 (개별 서비스에 대한 약관 및 약관의 해석 )
          </p>
          <div className="text-[10px]">
            <p>
              1. "팀"은 필요한 경우 특정 서비스에 관하여 적용될 사항(이하
              "개별약관") 및 세부적인 내용(이하 "이용정책")을 정하여 운영할 수
              있으며, 해당 내용은 홈페이지 등을 통해 공지합니다.
            </p>
            <p>
              2. 특정 서비스에 대한 "개별약관"이 본 약관과 상충할 경우에는
              "개별약관"이 우선하여 적용됩니다.
            </p>
            <p>
              3. "회원"은 항상 개별약관이나 이용정책의 내용에 변경이 있는지를
              주시하여야 하며, 변경사항의 공지가 있을 시에는 이를 확인하여야
              합니다.
            </p>
            <p>
              4. 본 약관 또는 개별약관에서 정하지 않은 사항은
              『전기통신사업법』, 『전자문서 및 전자거래 기본법』, 『정보통신망
              이용촉진 및 정보보호 등에 관한 법률』, 『전자상거래 등에서의
              소비자보호에 관한 법률』, 『개인정보보호법』 등 관련 법의 규정 및
              팀이 정한 서비스의 세부이용지침 등의 규정에 따릅니다. 또한 본
              약관에서 정한 팀의 책임 제한 규정은 관련 법령이 허용하는
              최대한도의 범위 내에서 적용됩니다.
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold">제 5 조 (회원에 대한 통지)</p>
          <div className="text-[10px]">
            <p>
              1. "팀"이 "회원"에 대한 통지를 하는 경우 이 약관에 별도 규정이
              없는 한 서면(전자문서 또는 전자우편을 포함)에 의하여 "회원"이
              "팀"에 제공한 전화번호, "라인업지"의 알림 기능 기타 전자적 수단
              등으로 할 수 있습니다.
            </p>
            <p>
              2. "팀"은 "회원" 전체에 대하여 통지를 하는 경우 "라인업지"
              초기화면 또는 게시판에 게시하는 방식으로 공지함으로써 전항의
              통지에 갈음할 수 있습니다. 다만, "회원"의 "서비스" 이용에 중대하게
              불리한 영향을 주는 사항에 대해서는 전항의 통지를 병행합니다.
            </p>
            <p>
              3. "회원"은 "팀"에 실제로 연락이 가능한 (휴대)전화번호의 정보를
              제공하고 해당 정보들을 최신으로 유지하여야 하며, "팀"의 통지를
              확인하여야 합니다.
            </p>
          </div>
        </div>

        <p className="text-sm font-semibold">
          제 2 장 서비스 이용계약의 체결과 해지
        </p>

        <div className="space-y-1">
          <p className="text-xs font-semibold">제 6 조 (이용계약의 체결)</p>
          <div className="text-[10px]">
            <p>
              1. 이용계약은 "회원"이 되고자 하는 자(이하 "가입신청자")가 약관의
              내용에 대하여 동의를 한 다음 "서비스" 이용 신청을 하고, "팀"이
              이러한 신청에 대하여 승낙함으로써 체결됩니다. 다만,
              "가입신청자"(회원이 14세 미만의 아동인 경우 그 아동의
              법정대리인)이 가입신청 당시 이 약관의 내용과 함께 제공한 동의
              확인란에 동의를 표시한 경우, "팀"은 "가입신청자"가 이 약관의
              내용을 모두 읽고 이를 충분히 이해하였으며, 이를 적용하는 것에
              동의한 것으로 간주합니다.
            </p>
            <p>
              2. "팀"은 "가입신청자"의 신청에 대하여 "서비스" 이용을 승낙함을
              원칙으로 합니다. 다만, 팀은 다음 각 호에 해당하는 신청에 대하여는
              승낙을 하지 않거나 사후에 이용계약을 해지할 수 있습니다.
            </p>
          </div>
          <div className="space-x-5 space-y-1 text-[10px]">
            <p />
            <p>
              1. 가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이
              있는 경우, 단 "팀"의 회원 재가입 승낙을 얻은 경우에는 예외로 함.
            </p>
            <p>2. 이미 가입된 회원과 정보가 동일한 경우.</p>
            <p>
              3. 실명이 아니거나 타인의 명의를 도용 혹은 등록내용에 허위,
              기재누락이 있는 경우.
            </p>
            <p>
              4. 허위의 정보를 기재하거나, 팀이 제시하는 내용을 기재하지 않은
              경우.
            </p>
            <p>
              5. 부정한 용도 및 영리 추구를 목적으로 서비스를 사용하고자 하는
              경우.
            </p>
            <p>
              6. 14세 미만 아동이 법정대리인(부모 등)의 동의 없이 신청하는 경우.
            </p>
            <p>
              7. "팀"으로부터 이용정지 및 제한을 당한 회원이 그 이용정지 기간
              중에 이용계약을 임의 해지하고 재 신청을 하는 경우.
            </p>
            <p>
              8. 회원 계약 해지 후 7일 이내에 같은 계정으로 가입한 경우(부정거래
              이용방지 목적).
            </p>
            <p>
              9. "가입신청자"의 귀책사유로 인하여 승인이 불가능하거나 기타 팀이
              정한 제반 사항을 위반하여 신청하는 경우.
            </p>
            <p>
              10. "팀"의 정책에 적합하지 않는 "회원"으로 판단되는 경우나
              "서비스" 제공이 곤란한 경우, "회원"의 이용 목적이나 "서비스" 이용
              방법이 "팀"의 재산권이나 영업권을 침해하거나 침해할 우려가 있는
              경우.
            </p>
            <p>
              11. 관계법령에 위배되거나 사회의 안녕질서 또는 미풍양속을 저해할
              목적으로 신청한 경우.
            </p>
            <p>
              12. 기타 "팀"이 합리적인 판단에 의하여 필요하다고 인정하는 경우.
            </p>
          </div>
          <div className="text-[10px]">
            <p>
              3. 제 1항에 따른 신청에 있어 "팀"은 제공하는 "서비스"의 종류에
              따라 필요한 경우 "가입신청자"에게 추가 정보를 요청할 수 있습니다.
            </p>
            <p>
              4. "팀"은 "서비스" 관련 설비의 여유가 없거나, 기술상 또는 업무상
              문제가 있는 경우에는 승낙을 유보할 수 있습니다.
            </p>
            <p>
              5. 본 조 제2항과 제4항에 따라 회원가입신청의 승낙을 하지
              아니하거나 유보한 경우, "팀"은 원칙적으로 이를 "가입신청자"에게
              알리도록 합니다.
            </p>
            <p>
              6. 이용계약의 성립 시기는 "팀"이 가입완료를 신청절차 상에서
              표시하거나 "팀"이 정하는 방법으로 "팀"이 "가입신청자"에게 가입완료
              안내를 발송하여 도달한 시점으로 합니다.
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold">
            제 7 조 (이용계약의 해지 및 이용제한)
          </p>
          <div className="text-[10px]">
            <p>
              1. "회원"은 언제든지 "팀"이 정한 절차에 따라 회원 탈퇴를 요청하여
              이용계약 해지 신청을 할 수 있으며, "팀"은 관련법 등이 정하는 바에
              따라 이를 즉시 처리합니다.
            </p>
            <p>
              2. "팀" 또는 "회원"이 이용계약을 해지하는 경우, 관련법 및
              개인정보취급방침에 따라 팀이 회원정보를 보유하는 경우를 제외하고는
              해지업무 처리 완료 즉시 회원의 데이터는 아래와 같은 절차와 방법에
              따라 파기처리 됩니다.
            </p>
            <p>
              - 파기절차 : "팀"은 파기 사유가 발생한 개인정보를 선정하고,
              개인정보 보호책임자의 승인 후 개인정보를 파기합니다.
            </p>
            <p>
              - 파기방법 : "팀"은 전자적 파일 형태로 처리된 정보는 기록을 재생할
              수 없도록 파기하며, 종이 문서에 의하여 처리된 개인정보는 분쇄기로
              분쇄하거나 소각하여 파기합니다.
            </p>
            <p>
              3. 팀은 아래 각 호의 사유가 발생하는 경우 회원의 "서비스" 이용을
              중단하거나 경고, 일시 정지, 영구이용정지 등으로 "서비스"이용을
              단계적으로 제한할 수 있습니다.
            </p>
          </div>
          <div className="space-x-5 space-y-1 text-[10px]">
            <p />
            <p>1. 부정하게 타인의 계정을 사용하여 "서비스"를 이용한 경우.</p>
            <p>
              2. "회원"이 "팀" 서비스의 운영을 고의 및 과실로 방해하는 경우.
            </p>
            <p>3. 제7조 제2항에 따른 승낙거부 사유가 있음이 확인된 경우.</p>
            <p>
              4. "서비스"의 대금결제, 기타 "서비스"이용과 관련하여 회원이
              부담하는 채무를 기일에 이행하지 않는 경우.
            </p>
            <p>
              5. 타인의 "서비스" 이용을 방해하거나 정보를 도용하는 등
              전자상거래질서를 위협하는 경우.
            </p>
            <p>
              6. "팀"을 이용하여 법령과 이 약관이 금지하거나 공공질서,
              미풍양속에 반하는 행위를 하는 경우.
            </p>
            <p>
              7. 기타 "팀"이 "회원"의 이용정지를 진행할 합리적인 사유가 있는
              경우.
            </p>
          </div>
          <div className="text-[10px]">
            <p>
              4. "팀"은 제 3항과 제 4항에 따른 귀책사유로 "회원"의 "서비스"
              이용을 중단 및 제한하는 경우 7영업일 이내로 문자 또는 기타의
              방법을 통하여 "서비스" 이용의 중단 및 제한 의사를 통지하며, 통지된
              시점에 실행됩니다.
            </p>
            <p>
              5. 이용계약이 종료되는 경우 환불 등의 처리는 "주점 관리자"의
              환불규정에 의합니다.
            </p>
            <p>
              6. 이용계약의 종료와 관련하여 발생한 손해는 이용계약이 종료된 해당
              "회원"이 책임을 부담하며, "팀"은 일체의 책임을 부담하지 않습니다.
            </p>
            <p>
              7. "팀"은 "회원"이 계속해서 12개월 이상 로그인하지 않는 경우,
              회원정보의 보호 및 운영의 효율성을 위해 이용을 정지할 수 있습니다.
            </p>
            <p>
              8. "회원"은 본 조에 따른 이용제한 등에 대해 "팀"이 정한 절차에
              따라 이의신청을 할 수 있으며, 이의가 정당하다고 "팀"이 인정하는
              경우 "팀"은 즉시 "서비스"의 이용을 재개합니다.
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-sm font-semibold">제 3 장 서비스의 이용</p>
          <p className="text-xs font-semibold">
            제 8 조 ("서비스"의 내용 및 제공)
          </p>
          <p className="text-[10px]">
            1. "팀"이 본 약관에 따라 "회원"에게 제공하는 "서비스"는 아래 각 호와
            같습니다. 단, "팀"은 일부 "서비스"의 이용조건 및 이용범위 등을
            별도로 정하여 운영할 수 있으며 해당 사항은 "회원"에게 공지합니다.
          </p>
          <div className="space-x-5 space-y-1 text-[10px]">
            <p />
            <p>1) ‘주점 관리자’의 주점정보 제공 서비스</p>
            <p>2) ‘주점 관리자’의 주점예약 서비스</p>
            <p>3) ‘주점 관리자’의 주점대기 서비스</p>
            <p>
              4) 기타 "팀"이 추가 개발하거나 다른 팀과의 제휴 계약 등을 통해
              "회원"에게 제공하는 일체의 서비스
            </p>
          </div>
          <div className="text-[10px]">
            <p>
              2. "팀"은 "서비스"를 연중무휴, 1일 24시간 제공함을 원칙으로
              합니다.
            </p>
            <p>
              3. "팀"은 "서비스"의 제공에 필요한 경우 정기점검 혹은 수시점검을
              실시할 수 있으며, 점검시간은 공지한 바에 따릅니다. 정기점검시간은
              사전에 공지하는 것을 원칙으로 하나 부득이 한 사유가 있는 경우
              사후에 공지할 수 있습니다.
            </p>
            <p>
              4. "서비스" 이용에 관한 안내사항, 예약 및 대기 시 유의사항, 변경,
              취소 정책, 대금 결제 취소∙환불정책 등은 ‘주점 관리자’가 예약,
              대기에 관한 취소∙환불정책을 통해 별도로 제공하고 있으며, “팀”은
              '주점 관리자'의 정책에 대하여 어떠한 책임도 부담하지 않습니다.
            </p>
            <p>
              5. "회원"은 "주점 관리자"의 예약 및 대기 서비스 등 정책을 충분히
              숙지하고 "서비스"를 이용하여야 합니다. "주점 관리자"가 예약 및
              대기 등의 정책이나 취소∙환불 정책을 별도로 운영하므로, "회원"은
              "서비스" 이용시 반드시 그 내용을 확인해야 합니다. "회원"이 이
              내용을 제대로 숙지하지 못해 발생한 피해에 대해서는 "팀"이 책임을
              부담하지 않습니다.
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold">
            제 9 조 ("서비스"의 변경, 중지 및 종료)
          </p>
          <div className="text-[10px]">
            <p>
              1. "팀"은 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라
              제공하고 있는 전부 또는 일부 "서비스"를 변경할 수 있습니다.
            </p>
            <p>
              2. "팀"은 무료로 제공되는 서비스의 일부 또는 전부를 팀의 정책 및
              운영의 필요상 수정, 중단, 변경할 수 있으며, 이에 대하여 관련법에
              대한 특별한 규정이 없는 한 "회원"에게 별도의 보상을 하지 않습니다.
            </p>
            <p>
              3. "팀"은 다음 각 호에 해당하는 경우 "서비스"의 일부 또는 전부의
              제공을 일시적으로 중단할 수 있습니다. 이 경우 팀은 "서비스" 이용의
              중단 사실을 즉시 공지합니다. 다만, "팀"이 사전에 공지할 수 없는
              부득이 한 사유가 있는 경우 사후에 공지할 수 있습니다.
            </p>
          </div>
          <div className="space-x-5 space-y-1 text-[10px]">
            <p />
            <p>
              1. 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 서버의 증설 및
              교체, 운영자의 고의∙과실이 없는 장애 등의 부득이한 경우.
            </p>
            <p>
              2. 「전기통신사업법」에 규정된 기간통신사업자가 전기통신서비스를
              중지하는 경우.
            </p>
            <p>
              3. 국가비상사태, 정전, 서비스 설비의 장애 또는 서비스 이용의 폭주
              등으로 정상적인 "서비스" 제공에 지장이 있는 경우.
            </p>
            <p>
              4. "주점 관리자"가 "팀"이 제공하는 통상적인 수준의 트래픽, 용량
              등을 과도하게 초과하여 "팀"의 정상적인 "서비스" 제공에 지장을
              초래할 우려가 있는 경우.
            </p>
          </div>
          <div className="text-[10px]">
            <p>
              4. "팀"은 이용 감소로 인한 원활한 서비스 제공의 곤란 및 수익성
              악화, 기술 진보에 따른 차세대 서비스로의 전환 필요성, 서비스
              제공과 관련한 "팀" 정책의 변경 등 기타 상당한 이유가 있는 경우에
              운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부 서비스를
              변경 또는 중단할 수 있습니다.
            </p>
            <p>
              5. "팀"은 본 조항에 따른 서비스의 변경, 중지 및 종료로 발생하는
              문제에 대해서 어떠한 책임도 지지 않습니다.
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold">제 10 조 (예약 서비스의 이용)</p>
          <p className="text-[10px]">
            1. "대기 서비스"는 아래의 약관에 따라 운영됩니다.
          </p>
          <div className="space-x-5 space-y-1 text-[10px]">
            <p />
            <p>
              1) “팀”은 “주점 관리자”의 대기 가능한 시간을 “회원”에게
              표시해주고, “회원”이 대기 신청을 요청할 때 “주점 관리자”에
              “회원”의 개인정보 및 대기 신청 정보를 전달하는 중개자 역할을
              합니다.
            </p>
            <p>
              2) 대기와 관련하여 “회원”이 입력한 정보에 문제가 있을 경우, 발생한
              책임과 불이익은 전적으로 ”회원”이 부담하여야 합니다.
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold">제 12 조 (저작권의 귀속)</p>
          <div className="text-[10px]">
            <p>
              1. "팀"이 작성한 저작물에 대한 저작권 및 기타 지적 재산권은 "팀"에
              귀속됩니다.
            </p>
            <p>
              2. "회원"은 "서비스"에 게재된 정보 중 "팀"에 지적 재산권이 귀속된
              정보를 "팀"의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 및 기타
              방법에 의하여 영리 또는 비영리 목적으로 이용하거나 제 3자에게
              이용하게 하여서는 안됩니다.
            </p>
            <p>
              3. "회원"은 본 이용약관으로 인하여 서비스를 소유하거나 서비스에
              관한 저작권을 보유하게 되는 것이 아니라, 팀으로부터 서비스의
              이용을 허락 받게 되는바, 서비스는 정보취득 또는 개인용도로만
              제공되는 형태로 회원이 이용할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-sm font-semibold">제 4 장 권리와 의무</p>
          <p className="text-xs font-semibold">제 13 조 (팀의 의무)</p>
          <div className="text-[10px]">
            <p>
              1. "팀"은 관련 법령과 이 약관이 금지하거나 공공질서, 미풍양속에
              반하는 행위를 하지 않으며, 이 약관이 정하는 바에 따라 지속적이고
              안정적으로 "서비스"를 제공하기 위하여 최선을 다합니다.
            </p>
            <p>
              2. "팀"은 "회원"이 안전하게 "서비스"를 이용할 수 있도록 "회원"의
              개인정보 보호를 위한 보안 시스템을 갖추어야 하며
              개인정보취급방침을 공시하고 준수하며, "회원"의 개인정보를 본인의
              승낙 없이 제3자에게 누설, 배포하지 않고, 이를 보호하기 위하여
              노력합니다.
            </p>
            <p>
              3. "팀"은 "서비스" 이용과 관련하여 발생하는 "회원"의 불만 및
              피해구제요청을 적절하게 처리할 수 있도록 필요한 인력 및 시스템을
              구비하며 "팀"은 "서비스" 이용과 관련하여 "회원"으로부터 제기된
              의견이나 불만이 정당하다고 인정할 경우에는 이를 처리하여야 합니다.
              "회원"이 제기한 의견이나 불만사항에 대해서는 전자우편 등을 통하여
              "회원"에게 처리과정 및 결과를 전달합니다.
            </p>
            <p>
              4. "팀"은 "회원"으로부터의 거래지시가 있음에도 불구하고 천재지변,
              "팀"의 귀책사유가 없는 정전, 화재, 통신장애 기타의 불가항력의
              사유로 처리 불가능하거나 지연된 경우에는 "회원"에 대하여 이로 인한
              책임을 지지 아니합니다.
            </p>
            <p>
              5. "팀"이 제공하는 "서비스"로 인하여 "회원"에게 손해가 발생한 경우
              그러한 손해가 팀의 고의나 과실에 의해 발생한 경우에 한하여 팀에서
              책임을 부담하며, 그 책임의 범위는 통상손해에 한합니다.
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold">제 14 조 (회원의 의무)</p>
          <div className="text-[10px]">
            <p>
              1. "회원"은 기타 관계 법령, 본 약관의 규정, 이용안내 및 서비스상에
              공지한 주의사항, "팀"이 공지하는 사항 등을 준수하여야 하며, 기타
              팀의 업무에 방해되는 행위를 하여서는 아니 됩니다.
            </p>
            <p>
              2. "회원"은 서비스의 이용권한, 기타 서비스 이용계약상의 지위를
              타인에게 양도, 증여할 수 없으며 이를 담보로 제공할 수 없습니다.
            </p>
            <p>
              3. "회원"은 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는
              안됩니다.
            </p>
          </div>
          <div className="space-x-5 space-y-1 text-[10px]">
            <p />
            <p>(1) 서비스 신청 또는 변경 시 허위내용을 등록하는 행위</p>
            <p>
              (2) 다른 회원의 아이디 및 비밀번호를 도용하여 부당하게 서비스를
              이용하거나, 정보를 도용하는 행위
            </p>
            <p>
              (3) 정당한 사유 없이 당사의 영업을 방해하는 내용을 기재하는 행위
            </p>
            <p>(4) 팀이 게시한 정보를 변경하는 행위</p>
            <p>
              (5) 팀이 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등을 송신 또는
              게시하는 행위
            </p>
            <p>(6) 팀과 기타 제3자의 저작권 등 지적재산권을 침해하는 행위</p>
            <p>
              (7) 팀 및 기타 제3자의 명예를 손상시키거나 업무를 방해 혹은 손해를
              끼치는 행위
            </p>
            <p>
              (8) 외설 또는 폭력적인 메시지, 화상, 음성 기타 공공질서 미풍양속에
              반하는 정보를 공개 또는 게시하는 행위
            </p>
            <p>(9) 팀의 동의 없이 영리를 목적으로 서비스를 사용하는 행위</p>
            <p>
              (10) 팀의 직원이나 서비스의 관리자를 가장하거나 사칭하여 또는
              타인의 명의를 도용하여 글을 게시하거나 메일을 발송하는 행위
            </p>
            <p>
              (11) 서비스와 관련된 설비의 오동작이나 정보 등의 파괴 및 혼란을
              유발시키는 컴퓨터 바이러스, 기타 다른 컴퓨터 코드, 파일, 프로그램
              자료를 등록 또는 유포하는 행위
            </p>
            <p>
              (12) 팀이 제공하는 소프트웨어 등을 개작하거나 리버스 엔지니어링,
              디컴파일, 디스어셈블 및 기타 일체의 가공행위를 통하여 서비스를
              복제, 분해 또는 모방 기타 변형하는 행위
            </p>
            <p>
              (13) 자동 접속 프로그램 등을 사용하는 등 정상적인 용법과 다른
              방법으로 서비스를 이용하여 팀의 서버에 부하를 일으켜 팀의 정상적인
              서비스를 방해하는 행위
            </p>
            <p>
              (14) 다른 회원의 개인정보를 그 동의 없이 수집, 저장, 공개하는 행위
            </p>
            <p>
              (15) 본 약관을 위반하여 "주점 관리자" 및 기타 제3자에게 손해를
              끼치는 행위
            </p>
            <p>(16) 기타 불법적이거나 팀에서 정한 규정을 위반하는 행위</p>
          </div>
          <div className="text-[10px]">
            <p>
              4. "회원"은 회원정보, 계정정보에 변경이 있는 경우 즉시 변경하여야
              하며, 더불어 비밀번호를 철저히 관리하여야 합니다. 회원의 귀책으로
              말미암은 관리소홀, 부정사용 등에 의하여 발생하는 모든 결과에 대한
              책임은 회원 본인이 부담하며, 팀은 이에 대한 어떠한 책임도 부담하지
              않습니다.
            </p>
            <p>
              5. "회원"은 "팀"에서 공식적으로 인정한 경우를 제외하고는 서비스를
              이용하여 상품을 판매하는 영업 활동을 할 수 없으며, 특히 해킹,
              광고를 통한 수익, 음란사이트를 통한 상업행위, 상용소프트웨어
              불법배포 등을 할 수 없습니다. 이를 위반하여 발생한 영업 활동의
              결과 및 손실, 관계기관에 의한 구속 등 법적 조치 등에 관해서는 팀이
              책임을 지지 않으며, 회원은 이와 같은 행위와 관련하여 팀에 대하여
              손해배상 의무를 집니다.
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-sm font-semibold">제 5 장 정보의 보호</p>
          <p className="text-xs font-semibold">제 15 조 (개인정보보호)</p>
          <div className="text-[10px]">
            <p>
              1. "팀"은 "회원"이 안전하게 "서비스"를 이용할 수 있도록 "회원"의
              개인정보보호를 위하여 개인정보보호정책을 실시하며 이에 따라
              "회원"의 개인정보보호를 최대한 보호하기 위하여 노력합니다.
            </p>
            <p>
              2. "팀"의 개인정보보호정책은 "팀"의 "홈페이지"를 통해 확인할 수
              있습니다. 단, "팀"의 공식 홈페이지 이외의 링크된 사이트에서는 팀의
              개인정보취급방침이 적용되지 않습니다. 링크된 사이트 및 서비스를
              제공하는 제3자의 개인정보 처리에 대해서는 해당 사이트 및 제3자의
              개인정보처리방침을 확인할 책임이 "회원"에게 있으며, "팀"은 이에
              대하여 책임을 부담하지 않습니다.
            </p>
            <p>
              3. "회원"이 "팀"에 제공한 개인정보는 서비스 이용의 혼선 방지,
              불법적 사용자에 대한 수사기관 수사협조, 기타 안정적인 서비스
              제공을 위해 회원탈퇴 후에도 일부 보유하게 됩니다.
            </p>
            <p>
              4. "팀"은 "팀"이 "서비스"를 중단하거나 "회원"이 개인정보 제공
              동의를 철회한 경우에는 신속하게 "회원"의 개인정보를 파기합니다.
              단, 전자상거래법 등 관련 법률에서 정하는 바에 따라 일정 정보는
              보관할 수 있습니다.
            </p>
            <p>
              5. "팀"은 "회원"이 서비스 이용 과정에서 직접 제공한 정보 외에도
              개인정보 보호 등 관련 법령에서 정한 절차에 따라 그 밖의 정보를
              수집 및 이용 또는 제3자에게 제공할 수 있습니다. 이 경우 팀은 관련
              법령에 따라 회원으로부터 필요한 동의를 받거나 관련 법령에서 정한
              절차를 준수합니다.
            </p>
            <p>
              6. 아이디, 비밀번호 등 계정정보의 관리책임은 "회원"에게 있으며,
              "팀"은 "회원"의 귀책사유로 인하여 노출된 "회원"의 개인정보에
              대해서 일체의 책임을 지지 않습니다.
            </p>
            <p>
              7. "팀"은 "회원"이 제공한 정보를 "팀"의 "서비스" 운영을 위한 목적
              이외의 용도로 사용하거나 "회원"의 동의 없이 제3자에게 제공하지
              않습니다. 단, 다음 각 호와 같은 경우에는 예외로 합니다.
            </p>
          </div>
          <div className="space-x-5 space-y-1 text-[10px]">
            <p />
            <p>
              - 예약시 "주점 관리자"와 "회원"간의 효율적인 소통을 위하여 해당
              "주점 관리자"에게 "회원"의 최소한의 회원정보가 제공되는 경우
            </p>
            <p>
              - 법령에 근거하여 회원정보의 이용과 제3자에 대한 정보제공이
              허용되는 경우
            </p>
            <p>- 기타 "팀"의 약관 및 정책에 따라 "회원"의 동의를 구한 경우</p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-sm font-semibold">제 6 장 기타</p>
          <p className="text-xs font-semibold">제 16 조 (손해배상)</p>
        </div>

        <div className="space-y-1">
          <div className="text-[10px]">
            <p>
              1. "회원"이 본 약관의 규정을 위반함으로 인하여 "팀"에 손해가
              발생하게 되는 경우, 본 약관을 위반한 회원은 팀에 발생하는 모든
              손해를 배상하여야 합니다.
            </p>
            <p>
              2. "회원"이 "서비스"를 이용하는 과정에서 행한 불법행위나 본 약관
              위반행위로 인하여 "팀"이 당해 회원 이외의 제3자로부터 손해배상
              청구 또는 소송을 비롯한 각종 이의제기를 받는 경우 당해 회원은
              자신의 책임과 비용으로 팀을 면책시켜야 하며, 팀이 면책되지 못한
              경우 당해 회원은 그로 인하여 팀에 발생한 모든 손해를 배상하여야
              합니다.
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold">제 17 조(팀의 책임제한)</p>
          <div className="text-[10px]">
            <p>
              1. "팀"은 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를
              제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면책됩니다.
            </p>
            <p>
              2. "팀"은 "회원"의 귀책사유로 인한 서비스의 이용장애에 대하여
              책임을 지지 않습니다.
            </p>
            <p>
              3. "팀"은 "회원"이 "서비스"를 이용하여 기대하는 수익을 상실한 것에
              대하여 책임을 지지 않으며 그 밖에 서비스를 통하여 얻은 자료로 인한
              손해 등에 대하여도 책임을 지지 않습니다. 팀은 회원이 게재한
              게시물의 정확성 등 내용에 대하여는 책임을 지지 않습니다.
            </p>
            <p>
              4. "팀"은 "회원" 상호간 또는 "회원"과 제3자 상호간에 서비스를
              매개로 발생한 분쟁에 대해서는 개입할 의무가 없으며 이로 인한
              손해를 배상할 책임도 없습니다.
            </p>
            <p>
              5. "팀"은 팀 및 팀의 임직원 그리고 팀 대리인의 고의 또는 중대한
              과실이 없는 한 다음 각 호의 사항으로부터 발생하는 손해에 대해
              책임을 지지 아니합니다.
            </p>
          </div>
          <div className="space-x-5 space-y-1 text-[10px]">
            <p />
            <p>(1) 회원정보 등의 허위 또는 부정확성에 기인하는 손해</p>
            <p>
              (2) 서비스에 대한 접속 및 서비스의 이용과정에서 발생하는 개인적인
              손해
            </p>
            <p>
              (3) 서버에 대한 제3자의 모든 불법적인 접속 또는 서버의 불법적인
              이용으로부터 발생하는 손해
            </p>
            <p>
              (4) 서버에 대한 전송 또는 서버로부터의 전송에 대한 제3자의 모든
              불법적인 방해 또는 중단행위로부터 발생하는 손해
            </p>
            <p>
              (5) 제3자가 서비스를 이용하여 불법적으로 전송, 유포하거나 또는
              전송, 유포되도록 한 모든 바이러스, 스파이웨어 및 기타 악성
              프로그램으로 인한 손해
            </p>
            <p>
              (6) 전송된 데이터의 오류 및 생략, 누락, 파괴 등으로 발생되는 손해
            </p>
            <p>
              (7) 회원 간의 회원 상태정보 등록 및 서비스 이용 과정에서 발생하는
              명예훼손 기타 불법행위로 인한 각종 민∙형사상 책임
            </p>
          </div>
          <p className="text-[10px]">
            6. "팀"은 무료로 제공되는 서비스 이용과 관련하여 관련법에 특별한
            규정이 없는 한 책임을 지지 않습니다.
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold">제 18 조 (분쟁조정)</p>
          <div className="text-[10px]">
            <p>
              1. "팀"은 "회원"으로부터 소정의 절차에 의해 제기되는 의견이나
              불만이 정당하다고 인정할 경우에는 적절한 절차를 거쳐 처리합니다.
              단, 처리 시 일정 기간이 소요될 경우 "회원"에게 그 사유와 처리
              일정을 즉시 통보합니다.
            </p>
            <p>
              2. "회원"은 "팀"의 분쟁처리결과에 대하여 이의가 있을 경우
              '금융위원회의 설치 등에 관한 법률'에 따른 금융감독원의
              금융분쟁조정위원회나 '소비자기본법' 에 따른 한국소비자원의
              소비자분쟁조정위원회, 전자거래기본법 제32조 및 동 시행령 제20조에
              의하여 설치된 전자거래분쟁조정위원회에 팀의 전자금융거래서비스의
              이용과 관련한 분쟁조정을 신청할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold">제 19 조 (준거법 및 재판관할)</p>
          <div className="text-[10px]">
            <p>
              1. 이 약관과 관련된 사항에 대하여는 대한민국 법을 준거법으로
              합니다.
            </p>
            <p>
              2. "팀"과 "회원"간 발생한 분쟁에 관한 소송은 민사소송법 상의
              관할법원에 제소합니다.
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold">제 20 조 (인수 및 합병)</p>
          <div className="text-[10px]">
            <p>
              1. "팀"은 인수 또는 합병이 되는 경우, 보유하고 있는 모든 지적
              재산권을 포함하여 "회원"의 개인정보 또한 인수자에게 이관하며,
              개인정보 이전에 관해서는 개별통지 합니다.
            </p>
            <p>
              2. 인수자는 "서비스"의 회원에게 기존 회원 유지 또는 탈퇴의 기회를
              제공합니다.
            </p>
            <p>
              3. 인수자는 개인정보를 제3자와 회원의 동의 없이 사용할 수
              없습니다.
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-[10px] font-semibold">*부칙</p>
          <p className="text-[10px]">
            본 약관은 2024년 9월 3일부터 시행합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
