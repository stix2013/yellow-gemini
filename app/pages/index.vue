<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})

const features = [
  {
    title: 'Modern Components',
    description: 'A rich set of UI components built with Tailwind CSS.',
    icon: 'i-heroicons-cube-transparent',
  },
  {
    title: 'Dark Mode',
    description: 'Beautifully crafted dark mode for all components.',
    icon: 'i-heroicons-moon',
  },
  {
    title: 'Customizable',
    description: 'Easily customize the look and feel of the components.',
    icon: 'i-heroicons-cog',
  },
]

const pricing = [
  {
    title: 'Starter',
    description: 'For personal projects and small teams.',
    price: '$0',
    features: ['1 Project', '10 Components', 'Basic Support'],
  },
  {
    title: 'Pro',
    description: 'For growing businesses and startups.',
    price: '$49',
    features: ['Unlimited Projects', 'All Components', 'Priority Support'],
  },
  {
    title: 'Enterprise',
    description: 'For large-scale applications and organizations.',
    price: 'Contact Us',
    features: ['All Pro Features', 'Dedicated Support', 'Custom Integrations'],
  },
]
</script>

<template>
  <div>
    <ULandingHero
      title="Build Your Next Idea Faster"
      description="Nuxt UI is a component library for building beautiful and responsive web applications."
    >
      <template #links>
        <UButton to="/getting-started" label="Get Started" size="xl" />
        <UButton to="/components" label="Explore Components" size="xl" color="gray" />
      </template>
    </ULandingHero>

    <ULandingSection
      title="Key Features"
      description="Everything you need to build a modern web application."
    >
      <UPageGrid>
        <ULandingCard
          v-for="item in features"
          :key="item.title"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
        />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      title="Pricing"
      description="Simple, transparent pricing."
    >
      <UPricingGrid>
        <UPricingCard
          v-for="plan in pricing"
          :key="plan.title"
          :title="plan.title"
          :description="plan.description"
          :price="plan.price"
          :features="plan.features"
        />
      </UPricingGrid>
    </ULandingSection>

    <ULandingSection>
      <ULandingCTA
        title="Ready to build?"
        description="Start your free trial today and experience the power of Nuxt UI."
        :links="[{ label: 'Get Started', to: '/getting-started', size: 'xl' }]"
      />
    </ULandingSection>
  </div>
</template>