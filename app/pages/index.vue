<script setup lang="ts">
  definePageMeta({
    layout: 'landing'
  })

  const links = [
    {
      label: 'Features',
      to: '#features'
    },
    {
      label: 'Pricing',
      to: '#pricing'
    },
    {
      label: 'Testimonials',
      to: '#testimonials'
    },
    {
      label: 'FAQ',
      to: '#faq'
    }
  ]

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

  const testimonials = [
    {
      quote: 'This is the best component library I have ever used. It is so easy to use and the components are beautiful.',
      author: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      quote: 'I love the dark mode! It is so well done and it makes my app look amazing.',
      author: 'Jane Doe',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
    }
  ]

  const faq = [
    {
      label: 'What is Nuxt UI?',
      content: 'Nuxt UI is a component library for building beautiful and responsive web applications.'
    },
    {
      label: 'Is it free?',
      content: 'Yes, Nuxt UI is free and open source.'
    },
    {
      label: 'How do I get started?',
      content: 'You can get started by following the documentation.'
    }
  ]
</script>

<template>
  <div>
    <UHeader :links="links">
      <template #logo>
        <div class="flex items-center">
          <img src="/icon.svg" class="h-8 w-8 mr-2" alt="Logo" />
          <span>Nuxt UI</span>
        </div>
      </template>
    </UHeader>

    <UPageHero
      title="Build Your Next Idea Faster"
      description="Nuxt UI is a component library for building beautiful and responsive web applications."
    >
      <template #links>
        <UButton to="/getting-started" label="Get Started" size="xl" />
        <UButton to="/components" label="Explore Components" size="xl" color="gray" />
      </template>
    </UPageHero>

    <UPageSection
      id="features"
    >
      <UPageGrid>
        <UPageCard
          v-for="item in features"
          :key="item.title"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
        />
      </UPageGrid>
    </UPageSection>

    <UPageSection
      id="pricing"
    >
      <UPricingPlans>
        <UPricingPlan
          v-for="plan in pricing"
          :key="plan.title"
          :title="plan.title"
          :description="plan.description"
          :price="plan.price"
          :features="plan.features"
        />
      </UPricingPlans>
    </UPageSection>

    <UPageSection
      id="testimonials"
    >
      <UPageGrid>
        <UCard v-for="testimonial in testimonials" :key="testimonial.author">
          <div class="flex items-center mb-4">
            <UAvatar :src="testimonial.avatar" :alt="testimonial.author" />
            <div class="ml-4">
              <p class="font-bold">{{ testimonial.author }}</p>
            </div>
          </div>
          <p>{{ testimonial.quote }}</p>
        </UCard>
      </UPageGrid>
    </UPageSection>

    <UPageSection
      id="faq"
    >
      <UAccordion :items="faq" />
    </UPageSection>

    <UFooter>
      <template #left>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>
    </UFooter>
  </div>
</template>
