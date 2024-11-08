<script setup lang="ts">
import { css } from "styled-system/css";
import { container, flex, hstack } from "styled-system/patterns";
</script>

<template>
  <div :class="container()">
    <header :class="flex({ align: 'center', justify: 'space-between' })">
      <div :class="hstack({ gap: 6, py: 6 })">
        <div :class="css({ w: '41px' })">
          <Logo />
        </div>
        <div :class="css({ w: 36 })">
          <NameLogo />
        </div>
      </div>
      <div :class="hstack({ gap: 5 })">
        <SearchIcon />
        <div>
          <CartIcon />
        </div>
      </div>
    </header>
  </div>
</template>
