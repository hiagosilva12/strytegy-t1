import React from "react";
import * as S from './style'


const Security = () => {

    return (
        <S.Container>
            <S.Title>Your data is safe</S.Title>
                <S.Image src='https://www.strytegy.com/static/security-3b980a306563c64f34ffb76769f48cf0.webp' alt="luan do mal" />
                <S.List>
                    <S.Item>Strytegy follows the Brazilian Federal law number 13.709/18 (Brazilian General Personal Data Protection Law – “LGPD”)</S.Item>
                    <S.Item>The security is compatible with the certifications CSA, SOC 1-3, ISO/IEC 27001, SO/IEC 27017, ISO/IEC 27018 and ISO 9001.</S.Item>
                    <S.Item>Strytegy follows the Allowlisting protocol: a measure that reduces harmful security attacks by allowing only trusted files, canvases, journeys and processes to be run.</S.Item>
                </S.List>
        </S.Container>
    )
}
export default Security