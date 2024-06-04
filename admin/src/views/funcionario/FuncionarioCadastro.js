import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CRow,
} from '@coreui/react'
import { useState } from 'react'

function FuncionarioCadastro() {
  const [nomeTxt, setNometxt] = useState('')
  const [cpfTxt, setCpfTxt] = useState('')
  const [emailTxt, setEmailTxt] = useState('')
  const [senhaTxt, setSenhaTxt] = useState('')
  const [confirmarSenhaTxt, setConfirmarSenhaTxt] = useState('')
  return (
    <CRow>
      <CCol>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Cadastro de Funcionario</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row">
              <CCol className="col-6 mb-2">
                <CFormInput
                  type="text"
                  label="Nome:"
                  placeholder="Nome"
                  onChange={(e) => setNometxt(e.target.value)}
                  value={nomeTxt}
                />
              </CCol>
              <CCol className="col-6 mb-2">
                <CFormSelect label="Função:">
                  <option value="ADM">Administrador</option>
                  <option value="TOTEN">Toten</option>
                </CFormSelect>
              </CCol>
              <CCol className="col-6 mb-2">
                <CFormInput
                  type="text"
                  label="CPF:"
                  placeholder="123.456.789-10"
                  onChange={(e) => setCpfTxt(e.target.value)}
                  value={cpfTxt}
                />
              </CCol>
              <CCol className="col-6 mb-2">
                <CFormInput
                  type="email"
                  label="Email:"
                  placeholder="Email"
                  onChange={(e) => setEmailTxt(e.target.value)}
                  value={emailTxt}
                />
              </CCol>
              <CCol className="col-6 mb-2">
                <CFormInput
                  type="password"
                  label="Senha:"
                  placeholder="Senha"
                  onChange={(e) => setSenhaTxt(e.target.value)}
                  value={senhaTxt}
                />
              </CCol>
              <CCol className="col-6 mb-2">
                <CFormInput
                  type="password"
                  label="Confirme sua Senha:"
                  placeholder="Senha"
                  onChange={(e) => setConfirmarSenhaTxt(e.target.value)}
                  value={confirmarSenhaTxt}
                />
              </CCol>
              <CCol className="col-12">
                <CButton color="secondary" size="m" className="me-2" href="/funcionario">
                  Cancelar
                </CButton>
                <CButton color="primary" size="m" onClick={() => teste(nomeTxt)}>
                  Salvar
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FuncionarioCadastro
