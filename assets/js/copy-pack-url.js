document.querySelectorAll('[data-copy-url]').forEach(function (button) {
  button.addEventListener('click', async function () {
    var container = button.closest('.pack-card');
    var status = container.querySelector('.pack-card__copy-status');

    try {
      await navigator.clipboard.writeText(container.querySelector('code').textContent.trim());
      status.textContent = status.dataset.copySuccess;
    } catch (error) {
      status.textContent = status.dataset.copyError;
    }
  });
});
