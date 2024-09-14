/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PageHeader } from '@/app/common/PageHeader';

export default function privacyPolicy() {
  return (
    <div className="pb-10 pt-2 shadow-2xl shadow-gy-100">
      <PageHeader title={'개인정보 처리방침'} />
      <div className="space-y-5 px-5 text-gy-700">
        <p className="text-[10px]">
          참숯한우천국(이하 "회사"라 한다)은 정보통신망 이용촉진 및 정보보호
          등에 관한 법률, 개인정보보호법 등 관련 법령에 따라 이용자의 개인정보를
          보호하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기
          위하여 다음과 같이 개인정보처리방침을 수립합니다.
        </p>

        <p className="text-[10px]">
          개인정보처리방침은 이용자가 언제나 쉽게 열람할 수 있도록 서비스
          초기화면을 통해 공개하고 있으며 관련법령, 지침, 고시 또는 라인업지
          서비스 정책의 변경에 따라 달라질 수 있습니다.
        </p>

        <div className="space-y-2">
          <p className="text-xs font-semibold">1. 개인정보의 수집·이용</p>
          <p className="text-[10px]">
            회사는 다음과 같이 이용자의 개인정보를 수집합니다. 처리하고 있는
            개인정보는 다음의 수집·이용 목적 이외의 용도로는 활용되지 않으며,
            수집·이용 목적이 변경되는 경우에는 개인정보보호법에 따라 별도의
            동의를 받는 등 필요한 조치를 이행합니다.
          </p>
        </div>

        <p className="text-[10px]">
          1) 회원 정보의 수집·이용목적, 수집항목, 보유·이용기간은 아래와
          같습니다.
        </p>

        <table className="w-full border-collapse border">
          <thead>
            <tr className="text-[10px]">
              <th className="w-2 border border-black bg-[#8F8F8F] px-1 py-1 font-semibold text-black">
                구분
              </th>
              <th className="w-28 border border-black bg-[#8F8F8F] px-10 py-1 font-semibold text-black">
                수집·이용 목적
              </th>
              <th className="w-20 border border-black bg-[#8F8F8F] px-2 py-1 font-semibold text-black">
                수집 항목
              </th>
              <th className="w-24 border border-black bg-[#8F8F8F] px-2 py-1 font-semibold text-black">
                보유 및 이용 기간
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-[10px] text-[#424242]">
              <td className="border border-black p-1">회원 관리</td>
              <td className="border border-black p-1">
                타사 계정을 이용한 회원 식별, 회원제 서비스 제공, 휴대전화번호
                인증
              </td>
              <td className="border border-black p-1">
                *수집하는 개인정보 : 이름(필수), 휴대전화번호(필수) <br />
                *회사가 제3자로부터 제공받은 개인정보 <br />- 카카오 :
                이름(필수), 카카오 ID(필수)
              </td>
              <td className="border border-black p-1">
                목적달성(회원 탈퇴 등) 후 지체없이 파기 (단, 관련법령 및
                회사정책에 따라 별도 보관되는 정보는 예외)
              </td>
            </tr>
            <tr className="text-[10px] text-[#424242]">
              <td rowSpan={3} className="border border-black p-1">
                서비스 이용
              </td>
              <td className="border border-black p-1">
                서비스 진행상황 안내, 계약 이행, 약관 변경 고지
              </td>
              <td className="border border-black p-1">휴대전화번호</td>
              <td className="border border-black p-1">
                서비스 해지 시까지(단, 관련법령에 따라 보관되는 정보는 예외)
              </td>
            </tr>
            <tr className="text-[10px] text-[#424242]">
              <td className="border border-black p-1">
                회원관리, 불법 및 부정이용 방지, 서비스 이용 기록의 통계 및
                분석, 서비스 개선, 신규 서비스 개발
              </td>
              <td className="border border-black p-1">
                수집한 모든 개인정보 항목, 자동 수집 정보
              </td>
              <td className="border border-black p-1">
                목적달성(회원 탈퇴 등) 후 지체없이 파기 (단, 관련법령에 따라
                보관되는 정보는 예외)
              </td>
            </tr>
            <tr className="text-[10px] text-[#424242]">
              <td className="border border-black p-1">
                문의(회원상담, 제휴상담)
              </td>
              <td className="border border-black p-1">휴대전화번호, 이름</td>
              <td className="border border-black p-1">
                전자상거래 등에서의 소비자 보호에 관한 법률에 따라 3년간 보관
              </td>
            </tr>
          </tbody>
        </table>

        <div className="text-[10px]">
          2) 서비스 이용과정에서 아래 자동 수집 정보가 생성되어 수집, 저장,
          조합, 분석될 수 있습니다. <br />
          <span className="p-2">
            - IP 주소, 쿠키, 서비스 이용 기록, 기기 정보(기기고유번호, OS 버전,
            모델명, 제조사 정보 등), 광고 ID, 통신기록등
          </span>
          <br />
          3) 회사는 회원관리, 불법 및 부정이용 방지, 서비스 이용기록 통계 및
          분석, 서비스 개선, 신규서비스 개발 목적으로 수집한 모든 개인정보와
          자동 수집 정보를 사용할 수 있습니다.
        </div>

        <p className="text-[10px]">
          4) 동의를 거부할 권리가 있으나, 서비스 제공을 위해 필요한 최소한의
          개인정보이므로 동의 거부 시 라인업지 서비스 이용이 제한됩니다.
        </p>

        <div className="space-y-2 pt-10">
          <p className="text-xs font-semibold">2. 개인정보 제3자 제공</p>
          <p className="text-[10px]">
            회사는 이용자의 개인정보를 개인정보 수집·이용 목적에서 명시한 범위
            내에서 사용하며, 이용자의 사전 동의 없이 개인정보 수집·이용 목적
            범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 제공하지
            않습니다. 다만, 아래와 같이 양질의 서비스 제공을 위해 이용자의
            개인정보를 협력업체와 공유할 필요가 있는 경우에는 제공 받는 자,
            제공목적, 제공정보 항목, 이용 및 보유기간 등을 회원에게 고지하여
            동의를 구하거나 관련법령에 따른 경우는 예외로 합니다.
          </p>
        </div>

        <p className="text-[10px]">
          ① 이용자가 사전에 공개 또는 제 3 자 제공에 동의한 경우
        </p>

        <div>
          <table className="w-full border-collapse border">
            <thead>
              <tr className="text-[10px]">
                <th className="w-20 border border-black bg-[#8F8F8F] p-1 font-semibold text-black">
                  제공받는 자
                </th>
                <th className="w-40 border border-black bg-[#8F8F8F] p-1 font-semibold text-black">
                  제공 목적
                </th>
                <th className="w-44 border border-black bg-[#8F8F8F] p-1 font-semibold text-black">
                  수집 항목
                </th>
                <th className="w-80 border border-black bg-[#8F8F8F] p-1 font-semibold text-black">
                  보유·이용기간
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[10px] text-[#424242]">
                <td className="border border-black p-1">
                  회원이 예약 및 대기를 신청한 주 점
                </td>
                <td className="border border-black p-1">
                  주점 예약 및 대기 서비스 제공(서비스 계약 이행, 예약 및 대기자
                  확인, 예약 및 대기 관리, 재방문고객 식별, 고객 상담, 고객
                  관리, 문의 및 상담) 및 제공거절
                </td>
                <td className="border border-black p-1">
                  휴대전화번호, 예약 및 대기자명, 기타 예약 및 대기를 위해
                  필요한 정보
                </td>
                <td className="border border-black p-1">
                  예약 및 대기를 통한 주점 방문일로부터 6 개월이 경과한 때 까지
                  보관. 단,(i) 매장이 방문일로부터 2년 이내의 기간을 정해
                  제공거절목록에 등록한 경우 매장이 제공거절목록 등록을 해제하는
                  때와 방문일로부터 6 개월이 경과한 때 중 나중에 도래하는 때까지
                  보관하고, (ii) 관계법령에 정해진 규정이 있는 경우 이에 따라
                  법정기간 동안 보관.
                </td>
              </tr>
              <tr className="text-[10px] text-[#424242]">
                <td className="border border-black p-1">
                  고객이 예약 및 대기를 신청하기 위해 사용한 멀티 플랫폼 서비스
                  제공자
                </td>
                <td className="border border-black p-1">
                  멀티플랫폼 서비스 App 내에서 주점 예약 및 대기, 이용 기록을
                  확인, 관리
                </td>
                <td className="border border-black p-1">
                  고객을 식별할 수 있는 정보로서 멀티플랫폼 서비스 제공자가
                  참숯한우 천국에 제공한 정보, 예약 및 대기 신청 정보, 방문일시,
                  방문인원
                </td>
                <td className="border border-black p-1">
                  목적달성(멀티플랫폼 서비스 회원 탈퇴 등)후 지체없이 파기 (단,
                  관련법령에 따라 별도 보관되는 정보는 예외)
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-[10px]">
            ② 회사는 멀티플랫폼 서비스를 제공하는 사업자(이하 “멀티플랫폼
            협력사”라 한다)의 채널을 통해 서비스에 진입하여 예약 및 대기를
            이용한 경우 다음의 기준에 따라 정보주체의 동의 없이 (i) 그 예약 및
            대기 이용기록 및 (ii) 정보주체를 식별할 수 있는 정보로서 멀티플랫폼
            협력사로부터 제공받은 정보를, 정보주체가 서비스에 진입하기 위해
            이용한 멀티플랫폼 협력사에 제공할 수 있습니다.
          </p>
        </div>

        <div className="space-x-2 space-y-2 text-[10px]">
          <p />
          <p>
            (1) 당초 수집 목적과의 관련성: 예약 및 대기 이용자에 한하여 해당
            예약 및 대기 이용기록을 확인할 수 있도록 하는 것을 목적으로 합니다.
          </p>
          <p>
            (2) 예측 가능성: 예약 및 대기 신청 화면에서, 예약 및 대기 이용기록은
            파트너 채널에서 확인할 수 있음을 고지하겠습니다.
          </p>
          <p>
            (3) 회사는 파트너 서비스 채널이 이미 정보주체의 개인정보를 보유한
            점, 예약 및 대기 이용 시 그 이용기록 열람은 반드시 필요한 점,
            멀티플랫폼 협력사의 채널에서 이용기록 삭제 기능이 제공되는 점,
            이용기록 연동을 원치 않는 자는 즉시 제공 중단조치를 취하는 점 등을
            포함하여 정보주체의 이익이 부당하게 침해되지 아니하도록
            고려하였습니다.
          </p>
          <p>
            (4) 멀티플랫폼 협력사의 채널에 제공되는 정보는 암호화 등 안전한
            조치를 거쳐 전송됩니다.
          </p>
        </div>

        <p className="text-[10px]">
          ③ 관계 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
          방법에 따라 수사 기관의 요구가 있는 경우
        </p>

        <div className="space-y-2 pt-10">
          <p className="text-xs font-semibold">
            3. 개인정보의 파기절차 및 방법
          </p>
          <p className="text-[10px]">
            ① 회사는 이용자의 개인정보를 원칙적으로 보유·이용기간의 경과,
            처리목적 달성, 서비스 이용약관에 따른 계약해지 등 개인 정보가
            불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
          </p>
        </div>

        <div>
          <p className="text-[10px]">
            ② 이용자로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이
            달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야
            하는 경우에는 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나
            보관장소를 달리하여 보존합니다.
            <br />
            <span className="p-2">
              - 다른 법령에 따라 개인정보를 보관하는 경우는 다음과 같습니다.
            </span>
          </p>
          <table className="border-collapse border">
            <thead>
              <tr className="text-[10px]">
                <th className="w-40 border border-black bg-[#8F8F8F] px-1 py-1 font-semibold text-black">
                  법령
                </th>
                <th className="w-40 border border-black bg-[#8F8F8F] p-1 font-semibold text-black">
                  항목
                </th>
                <th className="w-10 border border-black bg-[#8F8F8F] px-2 py-1 font-semibold text-black">
                  기간
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[10px] text-[#424242]">
                <td rowSpan={2} className="border border-black p-1">
                  전자상거래 등에서의 소비자보호에 관한 법률
                </td>
                <td className="border border-black p-1">
                  계약 또는 청약철회 등에 관한 기록
                </td>
                <td className="border border-black p-1">5 년</td>
              </tr>
              <tr className="text-[10px] text-[#424242]">
                <td className="border border-black p-1">
                  소비자의 불만 또는 분쟁 처리에 관한 기록
                </td>
                <td className="border border-black p-1">3 년</td>
              </tr>
              <tr className="text-[10px] text-[#424242]">
                <td className="border border-black p-1">통신비밀보호법</td>
                <td className="border border-black p-1">
                  서비스 이용 관련 개인정보(로그기록)
                </td>
                <td className="border border-black p-1">3 개월</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-[10px]">
          ③ 회사는 1 년 동안 회사의 서비스를 이용하지 않은 이용자의 개인정보를
          파기하거나 별도로 분리하여 저장할 수 있습니다. <br />
          <span className="p-2">
            - 이 경우 회사는 개인정보가 파기되거나 분리되어 저장·관리된다는
            사실, 서비스 미이용 기간 만료일, 해당 개인정보의 항목을 공지사항,
            전자우편 등의 방법으로 미이용 기간 30 일 전에 이용자에게 알릴 수
            있습니다. 이를 위해 이용자는 회사에게 정확한 연락처 정보를 알리거나
            수정하여야 합니다.
          </span>
        </p>

        <div className="space-x-2 text-[10px]">
          <p> ④ 개인정보 파기의 절차 및 방법은 다음과 같습니다. </p>
          <span>
            - 파기 절차 : 회사는 파기 사유가 발생한 개인정보를 개인정보 보호
            책임자의 승인 절차를 거쳐 파기합니다.
          </span>
          <br />
          <p>
            - 파기 방법 : 회사는 전자적 파일 형태로 기록·저장된 개인정보는
            기록을 재생할 수 없도록 기술적인 방법 또는 물리적인 방법을 이용하여
            파기하며, 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각등을
            통하여 파기합니다.
          </p>
        </div>

        <div className="space-y-2 pt-10">
          <p className="text-xs font-semibold">
            4. 이용자 및 법정대리인의 권리와 그 행사방법
          </p>
          <p className="text-[10px]">
            ① 이용자가 직접 자신의 개인정보를 조회, 수정, 삭제하는 것을 원칙으로
            하며, 회사는 이를 위한 기능을 제공합니다. <br />② 이용자 및
            법정대리인은 개인정보의 조회,수정,삭제를 요청할 수 있으며, 회사는
            정책에 따라 본인확인 절차를 거쳐 이를 조치하겠습니다. <br />③
            이용자께서 개인정보의 오류에 대한 정정을 요구하신 경우에는 정정을
            완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한
            잘못된 개인정보를 제 3 자에게 이미 제공한 경우에는 정정 처리결과를
            제 3 자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다. <br />
            ④ 이용자는 자신의 개인정보를 최신의 상태로 유지해야 하며, 이용자의
            부정확한 정보 입력으로 발생하는 문제의 책임은 이용자 자신에게
            있습니다. <br />⑤ 타인의 개인정보를 도용한 회원가입의 경우 이용자
            자격을 상실하거나 관련 개인정보보호 법령에 의해 처벌 받을 수
            있습니다. <br />⑥ 이용자는 전자우편, 비밀번호 등에 대한 보안을
            유지할 책임이 있으며 제3자에게 이를 양도하거나 대여 할 수 없습니다.
          </p>
        </div>

        <div className="space-y-2 pt-10">
          <p className="text-xs font-semibold">
            5. 개인정보의 기술적/관리적 보호대책
          </p>
          <div className="text-[10px]">
            회사는 이용자들의 개인정보를 처리함에 있어 개인정보가 분실, 도난,
            유출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은
            기술적/관리적 보호대책을 강구하고 있습니다.
            <br /> ① 비밀번호의 암호화 <br /> 이용자의 비밀번호는 일방향
            암호화하여 저장 및 관리되고 있으며, 개인정보의 확인, 변경은
            비밀번호를 알고 있는 본인에 의해서만 가능합니다.
            <br />
            <div className="space-x-2">
              <p>② 해킹 등에 대비한 대책</p>
              <p>
                (1) 회사는 해킹, 컴퓨터 바이러스 등 정보통신망 침입에 의해
                이용자의 개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을
                다하고 있습니다.
              </p>
              <p>
                (2) 최신 백신 프로그램을 이용하여 이용자들의 개인정보나 자료가
                유출되거나 손상되지 않도록 방지하고 있습니다.
              </p>
              <p>
                (3) 만일의 사태에 대비하여 침입차단 시스템을 이용하여 보안에
                최선을 다하고 있습니다.
              </p>
              <p>
                (4) 민감한 개인정보는 암호화 통신 등을 통하여 네트워크상에서
                개인정보를 안전하게 전송할 수 있도록 하고 있습니다
              </p>
            </div>
            ③ 개인정보 처리 최소화 및 교육
            <br /> 회사는 개인정보 관련 처리 담당자를 최소한으로 제한하며,
            개인정보 처리자에 대한 교육 등 관리적 조치를 통해 법령 및 내부방침
            등의 준수를 강조하고 있습니다.
            <br />④ 개인정보보호 전담담당부서 운영 <br />
            회사는 개인정보의 보호를 위해 개인정보보호 전담부서를 운영하고
            있으며, 개인정보처리방침의 이행사항 및 담당자의 준수여부를 확인하여
            문제가 발견될 경우 즉시 해결하고 바로 잡을 수 있도록 최선을 다하고
            있습니다.
          </div>
        </div>

        <div className="space-y-2 pt-10">
          <p className="text-xs font-semibold">6. 개인정보 보호책임자</p>
          <p className="text-[10px]">
            ① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
            처리와 관련한 고객님의 불만처리 및 피해구제 등을 위하여 아래와 같이
            개인정보 보호책임자 및 개인정보보호 담당자를 지정하고 있습니다.
            <br />② 이용자께서는 회사의 서비스(또는 사업)을 이용하시면서 발생한
            모든 개인정보와 관련된 문의, 불만처리, 피해구제 등에 관한 사항을
            개인정보 보호책임자 및 담당자에게 문의하실 수 있습니다. 회사는
            이용자의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
          </p>
        </div>

        <table className="border-collapse border">
          <thead>
            <tr className="text-[10px]">
              <th className="w-20 border border-black bg-[#8F8F8F] px-1 py-1 font-semibold text-black">
                구분
              </th>
              <th className="w-60 border border-black bg-[#8F8F8F] p-1 font-semibold text-black">
                개인정보 보호책임자
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-[10px] text-[#424242]">
              <td className="border border-black p-1">담당자</td>
              <td className="border border-black p-1">김예찬</td>
            </tr>
            <tr className="text-[10px] text-[#424242]">
              <td className="border border-black p-1">전화</td>
              <td className="border border-black p-1">010-4227-6933</td>
            </tr>
            <tr className="text-[10px] text-[#424242]">
              <td className="border border-black p-1">이메일</td>
              <td className="border border-black p-1">tisckd@naver.com</td>
            </tr>
          </tbody>
        </table>

        <div className="space-y-2 pt-10">
          <p className="text-xs font-semibold">
            7. 기타 개인정보침해에 대한 신고 및 상담
          </p>
          <p className="text-[10px]">
            이용자는 아래 이 기관에 대해 개인정보 침해에 대한 피해구제 상담 등을
            문의하실 수 있습니다. 아래의 기관은 정보기관 소속으로서, 회사의
            자체적인 개인정보 불만처리 또는 개인정보 피해구제 결과에 만족하지
            못하실 경우, 자세한 도움이 필요하실 경우에는 문의하여 주시기
            바랍니다.
          </p>
        </div>

        <table className="border-collapse border">
          <tbody>
            <tr className="px-10 text-[10px] text-[#424242]">
              <td className="w-44 border border-black p-1">
                개인정보 침해신고센터
              </td>
              <td className="w-48 border border-black p-1">
                (국번없이) 118 / privacy.kisa.or.kr
              </td>
            </tr>
            <tr className="text-[10px] text-[#424242]">
              <td className="border border-black p-1">
                대검찰청 사이버범죄수사단
              </td>
              <td className="border border-black p-1">
                (국번없이) 1301 / www.spo.go.kr
              </td>
            </tr>
            <tr className="text-[10px] text-[#424242]">
              <td className="border border-black p-1">경찰청 사이버안전국</td>
              <td className="border border-black p-1">
                (국번없이) 182 / www.cyber.go.kr
              </td>
            </tr>
            <tr className="text-[10px] text-[#424242]">
              <td className="border border-black p-1">
                전자거래분쟁조정위원회
              </td>
              <td className="border border-black p-1">
                1661-5714 / https://www.ecmc.or.k
              </td>
            </tr>
          </tbody>
        </table>

        <div className="space-y-2 pt-10">
          <p className="text-xs font-semibold">8. 고지의 의무</p>
          <p className="text-[10px]">
            ① 현 개인정보처리방침은 법령, 정부의 정책 또는 회사 내부정책 등
            필요에 의하여 변경될 수 있으며, 내용추가, 삭제 및 수정이 있을 시에는
            홈페이지의 ‘공지사항’을 통해 고지할 것입니다. <br />② 현
            개인정보처리방침은 2024 년 08 월 19 일부터 적용되며, 변경 전의
            개인정보처리방침은 공지사항을 통해서 확인하실 수 있습니다. <br />-
            공고일자 :2024년 08월 01일 <br />- 시행일자 :2024년 08월 19일
          </p>
        </div>
      </div>
    </div>
  );
}
