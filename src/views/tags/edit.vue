<template>
  <tags-detail :is-edit="true" />
</template>

<script>
import TagsDetail from './components/TagsDetail'

export default {
  name: 'EditForm',
  components: { TagsDetail }
}
</script>

