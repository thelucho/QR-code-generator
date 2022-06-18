<template>
  <div class="container">
    <CStack w="500px">
      <CBox :p="5" border-width="1px">
        <CHeading text-align="center" mb="4">
          👨‍💻 QR Code Generator
        </CHeading>
        <CText align="center" :mt="4" mb="4">
          Site created with 
          <c-badge mx="2" variant="solid" variant-color="green">Nuxt</c-badge>+<c-badge mx="2" variant="solid" variant-color="cyan">Chakra UI</c-badge>
        </CText>

        <form @submit.prevent="handleGenerator()">
          <c-input type="url" :value="value" v-model="value" placeholder="Paste your URL..." />
          <c-button w="100%" mt="2" mb="5" variant-color="green" variant="solid" type="submit">Generate Code</c-button>
        </form>

        <c-divider border-color="grey" />

        <CText v-if="!showCode" align="center" :mt="4">
          Not QR code generated yet
        </CText>
        <c-spinner v-else-if="loading" color="blue.500" />
        <vue-qr v-else :text="value"></vue-qr>
      </CBox>
    </CStack>
  </div>
</template>

<script lang="js">
import {
  CStack,
  CBadge,
  CButton,
  CHeading,
  CText,
  CBox,
  CSpinner,
  CDivider,
  CFormControl,
  CFormLabel,
  CFormErrorMessage,
  CFormHelperText
} from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    CStack,
    CBadge,
    CButton,
    CHeading,
    CText,
    CBox,
    CSpinner,
    CDivider,
    CFormControl,
    CFormLabel,
    CFormErrorMessage,
    CFormHelperText
  },
  data () {
    return {
      value: '',
      showCode: false,
      loading: false
    }
  },
  methods: {
    handleGenerator() {
      this.loading = !this.loading
      this.showCode = false

      setTimeout(() => (this.loading = false), 2000)

      this.showCode = true
      this.url = ''
    }
  }
}
</script>
