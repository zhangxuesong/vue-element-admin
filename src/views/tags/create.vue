<template>
  <tags-detail :is-edit="false" />
</template>

<script>
import TagsDetail from './components/TagsDetail'

export default {
  name: 'CreateTags',
  components: { TagsDetail }
}
</script>

