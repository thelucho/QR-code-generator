<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CStack w="100vw" h="100vh" bg="gray.50" direction="column" align="center" justify="center">
          <CReset />
          <Nuxt />
        </CStack>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>
<script lang="js">
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CStack
} from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CStack
  }
}
</script>
