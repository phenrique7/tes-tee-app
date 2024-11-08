<script setup lang="ts">
import { css } from "styled-system/css";
import { container, grid } from "styled-system/patterns";
</script>

<template>
  <footer :class="css({ pt: 20 })">
    <div :class="container({ display: 'flex', justifyContent: 'space-between' })">
      <div :class="css({ w: 6 })">
        <Logo />
      </div>
      <div
        :class="
          grid({
            gap: 6,
            columns: 3,
            '& ul li:first-child': { fontWeight: 'medium' },
          })
        "
      >
        <ul>
          <li>COMPANY</li>
          <li>About</li>
          <li>Stores</li>
          <li>Careers</li>
          <li>Contact</li>
          <li>Partners</li>
          <li>Franchises & Multibrands</li>
        </ul>
        <ul>
          <li>RESOURCES</li>
          <li>Payment & Shipping</li>
          <li>Exchanges & Returns</li>
          <li>Product Care</li>
          <li>FAQ</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li>PRIVACY</li>
          <li>Terms & Conditions</li>
          <li>Cookie Policy</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>NEWSLETTER</div>
    </div>
  </footer>
</template>
