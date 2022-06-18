<template>
  <div class="container">
    <CStack w="500px" bg="white">
      <CBox :p="5" border-width="1px" borderRadius="lg">
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

        <CStack d="flex" align-items="center">
          <CText v-if="!showCode" align="center" :mt="4" color="gray.400">
            Not QR code generated yet
          </CText>
          <c-spinner mt="5" v-else-if="loading" color="green.500" />
          <vue-qr v-else :text="value"></vue-qr>
        </CStack>
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

      setTimeout(() => (this.loading = false), 1500)

      this.showCode = true
      this.value = ''
    }
  }
}
</script>
